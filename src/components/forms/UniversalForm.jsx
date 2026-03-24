import React, { useState } from 'react';
import { db, storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { compressTezroImage } from '../../utils/ImageCompressor';

const UniversalForm = ({ category, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    experience: '',
    vehicleNo: '',
    businessName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const photoFile = e.target.mainPhoto.files[0];
      const compressed = await compressTezroImage(photoFile);
      
      const storageRef = ref(storage, `registrations/${category}/${Date.now()}`);
      await uploadBytes(storageRef, compressed);
      const photoUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "registrations"), {
        ...formData,
        category,
        photoUrl,
        status: "pending",
        createdAt: serverTimestamp()
      });

      alert("Tezro: آپ کی درخواست وصول ہوگئی ہے! ایڈمن جلد تصدیق کرے گا۔");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={formCardStyle}>
      <button onClick={onBack} style={backBtn}>← واپس جائیں</button>
      <h2 style={{ color: '#FFD700' }}>{category} رجسٹریشن</h2>
      
      <form onSubmit={handleSubmit}>
        {/* بنیادی معلومات (سب کے لیے یکساں) */}
        <input name="name" placeholder="مکمل نام" onChange={handleChange} required style={inputStyle} />
        <input name="phone" placeholder="موبائل نمبر" onChange={handleChange} required style={inputStyle} />
        <input name="city" placeholder="شہر کا نام" onChange={handleChange} required style={inputStyle} />

        {/* ڈائنامک فیلڈز (کام کی قسم کے لحاظ سے) */}
        { (category === 'Driver' || category === 'Delivery Boy') && (
          <input name="vehicleNo" placeholder="گاڑی / بائیک نمبر" onChange={handleChange} required style={inputStyle} />
        )}

        { (category === 'Plumber' || category === 'Carpenter') && (
          <input name="experience" placeholder="تجربہ (سالوں میں)" onChange={handleChange} required style={inputStyle} />
        )}

        { (category === 'Vendor' || category === 'Shopkeeper') && (
          <input name="businessName" placeholder="دکان یا برانڈ کا نام" onChange={handleChange} required style={inputStyle} />
        )}

        <label style={{ display: 'block', margin: '10px 0', color: '#ccc' }}>اپنی تصویر اپلوڈ کریں:</label>
        <input type="file" name="mainPhoto" accept="image/*" required style={inputStyle} />

        <button type="submit" disabled={loading} style={submitBtn}>
          {loading ? "ڈیٹا محفوظ ہو رہا ہے..." : "رجسٹریشن مکمل کریں"}
        </button>
      </form>
    </div>
  );
};

const formCardStyle = { background: '#111', padding: '25px', borderRadius: '20px', border: '1px solid #FFD700', width: '100%', maxWidth: '400px' };
const inputStyle = { width: '100%', padding: '12px', margin: '10px 0', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '8px', boxSizing: 'border-box' };
const submitBtn = { width: '100%', padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' };
const backBtn = { background: 'none', border: 'none', color: '#FFD700', cursor: 'pointer', marginBottom: '10px' };

export default UniversalForm;
