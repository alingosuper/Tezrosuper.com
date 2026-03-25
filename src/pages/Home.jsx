import React from 'react';

const Home = () => {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #111' }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>TEZRO</h2>
        <button style={{ background: '#FFD700', border: 'none', padding: '8px 20px', borderRadius: '5px', fontWeight: 'bold' }}>Login</button>
      </nav>

      <div style={{ textAlign: 'center', paddingTop: '100px', paddingHorizontal: '20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Tezro Super App</h1>
        <p style={{ color: '#888', fontSize: '1.2rem' }}>پاکستان کی پہلی محفوظ ترین ملٹی سروس ایپ</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px', flexWrap: 'wrap' }}>
          <div style={cardStyle}>🚗 Rides</div>
          <div style={cardStyle}>📦 Delivery</div>
          <div style={cardStyle}>🛠️ Services</div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: '#111',
  padding: '30px',
  borderRadius: '15px',
  border: '1px solid #222',
  width: '150px',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: '0.3s'
};

export default Home;
