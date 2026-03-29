import React, { useState, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';
import { Camera, ShieldCheck, UploadCloud } from 'lucide-react';
import CryptoJS from 'crypto-js';

const SmartForm = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({ name: '', category: '', price: '' });
  const imageRef = useRef();

  const identifyImage = async () => {
    if (!imageRef.current) return;
    setLoading(true);
    try {
      const model = await mobilenet.load();
      const predictions = await model.classify(imageRef.current);
      if (predictions.length > 0) {
        setProduct({
          ...product,
          name: predictions[0].className.split(',')[0],
          category: "Tezro Verified Store",
          price: (Math.random() * 50 + 10).toFixed(2)
        });
      }
    } catch (err) { console.error("AI Error:", err); }
    setLoading(false);
  };

  const handleSecureUpload = () => {
    const secretKey = "Tezro_Private_Key_2026";
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(product), secretKey).toString();
    console.log("🔒 Encrypted Data:", encryptedData);
    alert("ڈیٹا سیکیور طریقے سے انکرپٹ ہو گیا۔");
  };

  const inputStyle = { backgroundColor: '#1a1a1a', border: '1px solid #FFD700', color: '#fff', padding: '12px', borderRadius: '8px', marginBottom: '10px', width: '100%', boxSizing: 'border-box' };
  const btnStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px', borderRadius: '10px', cursor: 'pointer', border: 'none', backgroundColor: '#333', color: '#FFD700', width: '100%', marginTop: '10px' };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ border: '2px dashed #FFD700', borderRadius: '20px', padding: '30px', textAlign: 'center', marginBottom: '20px' }}>
        {image ? (
          <img src={image} ref={imageRef} alt="Upload" style={{ width: '100%', borderRadius: '10px' }} />
        ) : (
          <div onClick={() => document.getElementById('fileInput').click()} style={{cursor: 'pointer'}}>
            <Camera size={50} style={{margin:'0 auto', color: '#FFD700'}} />
            <p>مصنوعات کی تصویر لیں</p>
          </div>
        )}
        <input id="fileInput" type="file" accept="image/*" hidden onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
      </div>

      {image && !loading && <button onClick={identifyImage} style={{...btnStyle, border: '1px solid #FFD700'}}>AI تجزیہ شروع کریں</button>}
      
      <div style={{ marginTop: '20px' }}>
        <input type="text" placeholder="نام" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} style={inputStyle} />
        <input type="text" placeholder="کیٹگری" value={product.category} readOnly style={inputStyle} />
        <input type="number" placeholder="قیمت" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} style={inputStyle} />
        <button onClick={handleSecureUpload} style={{ ...btnStyle, backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold' }}>محفوظ اپلوڈ</button>
      </div>
    </div>
  );
};

export default SmartForm;
