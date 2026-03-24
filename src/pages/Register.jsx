import React, { useState } from 'react';
import CategoryPopup from '../components/popup/CategoryPopup';
import UniversalForm from '../components/forms/UniversalForm';

const Register = () => {
  // اسٹیٹ جو ہینڈل کرے گی کہ صارف نے کونسی کیٹیگری چنی ہے
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div style={pageStyle}>
      {/* اگر کیٹیگری نہیں چنی گئی تو پاپ اپ دکھائیں، ورنہ ڈائنامک فارم */}
      {!selectedCategory ? (
        <CategoryPopup setCategory={setSelectedCategory} />
      ) : (
        <div style={containerStyle}>
          <UniversalForm 
            category={selectedCategory} 
            onBack={() => setSelectedCategory(null)} 
          />
        </div>
      )}
    </div>
  );
};

// پریمیم ڈارک تھیم سٹائلنگ
const pageStyle = { 
  backgroundColor: '#000', 
  minHeight: '100vh', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  padding: '20px',
  fontFamily: 'sans-serif'
};

const containerStyle = {
  width: '100%',
  maxWidth: '450px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export default Register;
