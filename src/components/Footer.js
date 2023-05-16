import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return( 
      <section className='bg-black justify-center text-white '>
        <div className='container mx-auto py-12'>
        <div className='row flex flex-col lg:flex-row justify-between gap-6'>
          <div className='col-md-4'>
          <h4 className='mb-2'>Contact Us</h4>

              <p>Nigeria:</p>
              <p>realestate.ng@gmail.com</p>
              <p>+234(0) 678 893 23445</p>
          </div>

          <div className='col-md-4'>
          <h3 className='mb-2'>Contact Us</h3>
              <p>USA:</p>
              <p>realestate.usa@gmail.com</p>
              <p>+1 678 893 23445</p>
          </div>

          <div className='col-md-4'>
          <h3 className='mb-2'>Quick Links</h3>
            
              <div className='hover:text-gray-600'><Link to="/">Home</Link></div>
              <div className='hover:text-gray-600'><Link to="/about">About</Link></div>
              <div className='hover:text-gray-600'><Link to="/contact">Contact</Link></div>
          </div>
          </div>
          <div className='mt-9 text-left lg:text-center'>CopyRight &copy; All Right Reserved</div>
        </div>
      </section>
  )
};

export default Footer;
