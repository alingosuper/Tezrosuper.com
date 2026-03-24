import React from 'react';

const GuestCheck = ({ onClose, onLogin }) => {
  const features = [
    { title: "Live Tracking", desc: "دیکھیں آپ کا ڈرائیور کہاں ہے" },
    { title: "Secure Wallet", desc: "محفوظ ترین ادائیگی کا نظام" },
    { title: "Verified Workers", desc: "تصدیق شدہ پلمبر اور الیکٹریشن" }
  ];

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={headerStyle}>
          <h2 style={{ color: '#FFD700', margin: 0 }}>Tezro Quick Check 🔍</h2>
          <button onClick={onClose} style={closeBtn}>×</button>
        </div>

        <p style={{ color: '#ccc', fontSize: '14px' }}>آپ بغیر رجسٹریشن کے درج ذیل سروسز کا جائزہ لے سکتے ہیں:</p>

        <div style={listStyle}>
          {features.map((f, i) => (
            <div key={i} style={itemStyle}>
              <strong style={{ color: '#FFD700' }}>{f.title}</strong>
              <p style={{ margin: '5px 0 0', fontSize: '12px' }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', borderTop: '1px solid #333', paddingTop: '15px' }}>
          <p style={{ fontSize: '13px', marginBottom: '10px' }}>مکمل رسائی اور رجسٹریشن کے لیے لاگ ان کریں</p>
          <button onClick={onLogin} style={loginBtn}>Google کے ساتھ لاگ ان کریں</button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 };
const modalStyle = { background: 'linear-gradient(145deg, #111, #050505)', padding: '25px', borderRadius: '25px', border: '1px solid #FFD700', width: '90%', maxWidth: '400px', textAlign: 'center', boxShadow: '0 10px 30px rgba(234, 179, 8, 0.2)' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const closeBtn = { background: 'none', border: 'none', color: '#FFD700', fontSize: '28px', cursor: 'pointer' };
const listStyle = { textAlign: 'left', display: 'grid', gap: '10px' };
const itemStyle = { padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #FFD700' };
const loginBtn = { width: '100%', padding: '12px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };

export default GuestCheck;
