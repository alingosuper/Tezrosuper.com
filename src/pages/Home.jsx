import React, { useState } from 'react';
import UniversalForm from '../components/forms/UniversalForm';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #111' }}>
        <h2 style={{ color: '#FFD700', margin: 0 }}>TEZRO</h2>
        <button onClick={() => setIsModalOpen(true)} style={navBtn}>Login / Register</button>
      </nav>

      <div style={{ textAlign: 'center', paddingTop: '80px', padding: '0 20px' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#FFD700', marginBottom: '10px' }}>Tezro Super App</h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem' }}>پاکستان کا سب سے بڑا ڈیجیٹل سروس نیٹ ورک</p>
        
        <div style={{ marginTop: '50px' }}>
          <button onClick={() => setIsModalOpen(true)} style={heroBtn}>اپنا کاروبار رجسٹر کریں</button>
        </div>
      </div>

      {/* Universal Modal */}
      <UniversalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

const navBtn = { background: '#FFD700', border: 'none', padding: '10px 25px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' };
const heroBtn = { background: 'transparent', color: '#FFD700', border: '2px solid #FFD700', padding: '15px 40px', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' };

export default Home;
