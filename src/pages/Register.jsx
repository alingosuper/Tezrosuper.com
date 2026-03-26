import React, { useState } from 'react';
import UniversalForm from '../components/forms/UniversalForm';

const Register = () => {
  const [step, setStep] = useState('select');
  const [category, setCategory] = useState('');

  const selectCategory = (cat) => {
    setCategory(cat);
    setStep('form');
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {step === 'select' ? (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{fontSize: '2.5rem'}}>رجسٹریشن کی قسم منتخب کریں</h1>
          <p style={{color: '#888', marginBottom: '40px'}}>آپ Tezro کو کس طرح استعمال کرنا چاہتے ہیں؟</p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => selectCategory('Passenger')} style={catBtn}>Passenger</button>
            <button onClick={() => selectCategory('Driver')} style={catBtn}>Driver</button>
            <button onClick={() => selectCategory('Vendor')} style={catBtn}>Vendor</button>
          </div>
        </div>
      ) : (
        <UniversalForm category={category} onBack={() => setStep('select')} />
      )}
    </div>
  );
};

const catBtn = { padding: '20px 40px', background: '#111', color: '#FFD700', border: '1px solid #222', borderRadius: '15px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' };

export default Register;
