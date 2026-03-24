import React, { useState } from 'react';
import CategoryPopup from '../components/popup/CategoryPopup';
import UniversalForm from '../components/forms/UniversalForm';

const Register = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div style={pageStyle}>
      {!selectedCategory ? (
        <CategoryPopup setCategory={setSelectedCategory} />
      ) : (
        <UniversalForm 
          category={selectedCategory} 
          onBack={() => setSelectedCategory(null)} 
        />
      )}
    </div>
  );
};

const pageStyle = { 
  backgroundColor: '#000', 
  minHeight: '100vh', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  padding: '20px' 
};

export default Register;
