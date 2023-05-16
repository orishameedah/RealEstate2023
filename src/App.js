import React from 'react';

// import routes and route
import { Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails'
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testmonials';

const App = () => {
  return (
   <div className='max-w-[1440px] mx-auto bg-white'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />}/>
      <Route path='/testimonials' element={<Testimonials />}></Route>
    </Routes>
    <Footer/>
  </div>
  );
};

export default App;
