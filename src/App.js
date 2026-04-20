import './App.css';
import { Routes, Route } from 'react-router-dom'; // 1. إضافة نظام المسارات
import Landing from './component/Landing';
import Hero from './component/Hero';
import Houses from './component/Houses';
import About from './component/About';
import Rentmanegment from './component/Rentmanegment';
import Support from './component/Support';
import Footer from "./component/Footer";
import InfoPage from "./Info/InfoPage"; // 2. استيراد الصفحة التي تريد الذهاب إليها

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            <Hero />
            <Houses />
            <About />
            <Rentmanegment />
            <Support />
            <Footer />
          </>
        } />

        {/* صفحة المعلومات (/InfoPage) تعرض مكون InfoPage فقط */}
        <Route path="/InfoPage" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;