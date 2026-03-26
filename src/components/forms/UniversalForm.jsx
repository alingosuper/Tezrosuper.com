import React, { useState } from 'react';

const UniversalForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('select'); // 'select' or 'form'
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);

  const services = [
    { id: 'rides', name: 'Rides', icon: '🚗', fields: ['گاڑی کا ماڈل', 'نمبر پلیٹ'] },
    { id: 'delivery', name: 'Delivery', icon: '📦', fields: ['بائیک نمبر', 'لائسنس'] },
    { id: 'food', name: 'Food', icon: '🍱', fields: ['ریسٹورنٹ کا نام', 'مینو کی قسم'] },
    { id: 'services', name: 'Services', icon: '🛠️', fields: ['ہنرمندی (Skill)', 'تجربہ'] },
    { id: 'grocery', name: 'Grocery', icon: '🛒', fields: ['دکان کا نام', 'ایڈریس'] },
    { id: 'pharmacy', name: 'Pharmacy', icon: '💊', fields: ['میڈیکل اسٹور لائسنس'] },
    { id: 'cargo', name: 'Cargo', icon: '🚛', fields: ['ٹرک کی قسم', 'وزن کی گنجائش'] },
    { id: 'rent', name: 'Rent-a-Car', icon: '🔑', fields: ['گاڑیوں کی تعداد'] }
  ];

  if (!isOpen) return null;

  const handleServiceSelect = (s) => {
    setService(s);
    setStep('form');
  };

  const inputStyle = {
    width: '100%', padding: '12px', margin: '8px 0', background: '#111', color: '#fff', border: '1px solid #222', borderRadius: '10px'
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeBtn}>✕</button>
        
        {step === 'select' ? (
          <div>
            <h2 style={{color: '#FFD700', textAlign: 'center'}}>کاروبار کی قسم منتخب کریں</h2>
            <div style={gridStyle}>
              {services.map(s => (
                <div key={s.id} onClick={() => handleServiceSelect(s)} style={serviceCard}>
                  <div style={{fontSize: '2rem'}}>{s.icon}</div>
                  <div style={{fontWeight: 'bold', marginTop: '5px'}}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button onClick={() => setStep('select')} style={{color: '#FFD700', background: 'none', border: 'none', cursor: 'pointer'}}>← واپس</button>
            <h2 style={{color: '#FFD700', textAlign: 'center'}}>{service.name} رجسٹریشن</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Tezro: ڈیٹا جمع ہو گیا!'); onClose(); }}>
              <input placeholder="پورا نام" style={inputStyle} required />
              <input placeholder="شناختی کارڈ نمبر" style={inputStyle} required />
              
              {/* متحرک فیلڈز جو سروس کے مطابق بدلیں گی */}
              {service.fields.map((field, index) => (
                <input key={index} placeholder={field} style={inputStyle} required />
              ))}
              
              <div style={securityNote}>
                🛡️ Tezro AI: آپ کی سیلفی اور CNIC کی تصدیق کی جائے گی۔
              </div>
              
              <button type="submit" style={submitBtn}>رجسٹریشن مکمل کریں</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 };
const modalStyle = { background: '#0a0a0a', padding: '30px', borderRadius: '25px', border: '1px solid #FFD700', width: '90%', maxWidth: '500px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' };
const serviceCard = { background: '#111', padding: '20px', borderRadius: '15px', textAlign: 'center', cursor: 'pointer', border: '1px solid #222' };
const submitBtn = { width: '100%', padding: '15px', background: '#FFD700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer' };
const closeBtn = { position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#FFD700', fontSize: '1.2rem', cursor: 'pointer' };
const securityNote = { fontSize: '11px', color: '#888', background: 'rgba(255,215,0,0.05)', padding: '10px', borderRadius: '8px', marginTop: '10px', border: '1px dashed #FFD700' };

export default UniversalForm;
