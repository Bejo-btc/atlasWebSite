import './App.css';

import Landing from './component/Landing';
import Hero from './component/Hero';
import Houses from './component/Houses';
import About from './component/About';
import Rentmanegment from './component/Rentmanegment';
import Support from './component/Support';
import Footer from "./component/Footer"
function App() {

  return (
    <>
      <div className='container'>
        <Landing />
        <Hero />
        <Houses />
        <About />
        <Rentmanegment />
        <Support />
        <Footer />

      </div>

    </>
  );
}
export default App;
