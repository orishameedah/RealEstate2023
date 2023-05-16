import React, { useState } from 'react';

// import link
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle)
  return(
    <header className='py-6 mb-12 border-b'>
     <div className='container mx-auto flex lg:justify-between justify-around  items-center'>
      {/* Logo */}
      <Link to='/'>
        <img src={Logo} alt=''/>
      </Link>

      {/* Desktop Nav */}
      <div className='hidden md:flex items-center lg:gap-6 gap-3'>
        <Link className='hover:text-violet-900 transition' style={{fontWeight: '600'}} to='/about'>
          About
        </Link>
        <Link className='hover:text-violet-900 transition '  style={{fontWeight: '600'}}
          to='/testimonials'
        >
          Testimonials
        </Link>
        <Link className='hover:text-violet-900 transition '  style={{fontWeight: '600'}}
          to='/contact'
        >
          Contact
        </Link>
      </div>

      {/* Mobile Nav  */}
      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav right-0"}
          style={{width: 200, zIndex: 1, }}
      >
        <div className='flex flex-col gap-y-6 mt-2 px-4 '
          style={{ fontSize: '1.3em', cursor: 'pointer', 
            color: 'white', float: 'left',}}
        size={20}>
          <Link className='hover:text-violet-900 transition'  to="/">
              Home
          </Link>
        <Link className='hover:text-violet-900 transition' to='/about'>
          About
        </Link>
        <Link  className='hover:text-violet-900 transition'
          to='/testimonials'
        >
          Testimonials
        </Link>
        <Link className='hover:text-violet-900 transition'
        to='/contact'
        >
          Contact
        </Link>
          </div>   
      </nav>


{/* Toggle button */}
<button onClick={handleToggle} className='block  md:hidden'>
            {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
        </button>
     </div>

      
      
    </header>
  );
};

export default Header;
