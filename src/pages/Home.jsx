import React, { useState } from 'react';
import { signInWithGoogle } from '../firebase';
import GuestCheck from '../components/popup/GuestCheck';

const Home = () => {
  const [showGuest, setShowGuest] = useState(false);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ color: '#FFD700', fontSize: '2.5rem' }}>TEZRO</h1>
        <p style={{ color: '#ccc' }}>تیز، محفوظ اور بااعتماد سروسز</p>
      </header>

      <main style={mainStyle}>
        {/* رجسٹریشن کا بٹن */}
        <button onClick={signInWithGoogle} style={primaryBtn}>
          اکاؤنٹ بنائیں / لاگ ان کریں
        </button>

        {/* بغیر رجسٹریشن جانچ پڑتال کا بٹن */}
        <button 
          onClick={() => setShowGuest(true)} 
          style={secondaryBtn}
        >
          بغیر رجسٹریشن جانچ پڑتال کریں 🔍
        </button>
      </main>

      {/* گیسٹ چیک پاپ اپ لاجک */}
      {showGuest && (
        <GuestCheck 
          onClose={() => setShowGuest(false)} 
          onLogin={signInWithGoogle} 
        />
      )}

      <footer style={footerStyle}>
        © 2026 Tezro Ecosystem | All Rights Reserved
      </footer>
    </div>
  );
};

// سٹائلنگ (تیزرو گولڈن تھیم)
const containerStyle = { backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' };
const headerStyle = { marginBottom: '40px' };
const mainStyle = { display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '300px' };
const primaryBtn = { padding: '15px', backgroundColor: '#FFD700', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' };
const secondaryBtn = { padding: '15px', backgroundColor: 'transparent', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' };
const footerStyle = { position: 'absolute', bottom: '20px', fontSize: '12px', color: '#555' };

export default Home;
