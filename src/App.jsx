import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// صفحات کو 'Lazy Load' کرنا سیکیورٹی اور اسپیڈ کے لیے بہتر ہے
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Security = lazy(() => import('./pages/Security'));
const Features = lazy(() => import('./pages/Features'));

// لوڈنگ کے دوران دکھانے کے لیے ایک سادہ اسکرین
const Loading = () => <div style={{textAlign: 'center', marginTop: '20%'}}>Loading Tezro Super App...</div>;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* مین پیج */}
          <Route path="/" element={<Home />} />
          
          {/* رجسٹریشن پیج */}
          <Route path="/register" element={<Register />} />
          
          {/* سیکیورٹی پیج */}
          <Route path="/security" element={<Security />} />
          
          {/* فیچرز پیج */}
          <Route path="/features" element={<Features />} />

          {/* اگر کوئی غلط یو آر ایل لکھے تو واپس ہوم پر بھیج دیں */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
