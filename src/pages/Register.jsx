import React from 'react';
import UniversalForm from '../components/forms/UniversalForm';

const Register = () => {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <UniversalForm category="General" onBack={() => window.history.back()} />
    </div>
  );
};

export default Register;
