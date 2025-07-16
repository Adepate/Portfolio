import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'


const Header = () => {

  const [menuOpen, setMenuOpen] = useState (false);
  const menuLinks = [
    { name: 'Home', to: 'home'},
    { name: 'About', to: 'about'},
    { name: 'Service', to: 'service'},
    { name: 'Testimonial', to: 'testimonial'},
    { name: 'Contact', to: 'contact'},
  ];

  useEffect(() => {
    if(menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return() => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className='bg-neutral-900 py-4 lg:px-[100px] px-7 fixed top-0 left-0 w-full z-50'>
      <div className='flex justify-between items-center'>
        <div className='text-red-700 font-bold text-4xl text-left'>
        Ade<span className='text-white'>shola</span>
        </div>

        <button className='text-white text-2xl md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoCloseSharp/> : <FaBars />}
        </button>

        <nav className='hidden md:block'> 
          <ul className='flex space-x-10 text-lg font-poppins text-white'>
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} smooth={true} duration={500} className={`cursor-pointer ${link.name === 'Home' ? 'text-red-600' : 'hover:text-red-700 transition-colors'}`}>
                {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      

    </header>
  )
}

export default Header