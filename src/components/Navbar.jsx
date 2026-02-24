import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile dropdown control
  const [openVenues, setOpenVenues] = useState(false);
  const [openWork, setOpenWork] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workList = [
    { label: 'Social & Family Celebrations', link: '/what-we-do/sociel-an-dfamilyevent' },
    { label: 'Corporate & Professional Events', link: '/what-we-do/corporate-and-profeshionalevent' },
    { label: 'Premium & Luxury Events', link: '/what-we-do/premium-and-luxury-events' },
    { label: 'Event Support Services', link: '/what-we-do/eventsupport-and-services' },
    // { label: 'Just Marred Decoration', link: '/just-married-decoration' },
    // // { label: 'Bride To Be Decoration', link: '/bride-to-be-decoration' },
    // { label: 'Festival Decoration', link: '/festival-decoration' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 bg-zinc-900 text-[#D4A017] shadow-md 
        transition-all duration-300
      `}
    >
      {/* TOP BAR */}
      <div
        className={`bg-[#D4A017] transition-all duration-300 ${
          isScrolled ? 'py-1' : 'py-2'
        }`}
      >
        <div className='flex gap-4 md:flex-row items-center justify-between px-4 md:px-20'>
          <a
            href='tel:+919217017881'
            className='text-black text-xs md:text-2xl font-semibold flex items-center gap-1'
          >
            <div className='text-xl p-2 bg-green-600 text-white rounded-full'><IoCallSharp /></div>
           <p className='text-lg'> +91-9217017881</p>
            
          </a>

          <div className='flex items-center gap-5 ml-6 border-3 border-black py-2 px-4 rounded-xl'>
            <a
              href='https://www.instagram.com/meetandgreetaffairs'
              target='_blank'
            >
              <FaInstagram className='text-2xl text-red-700 hover:text-white transition' />
            </a>

            <Link to='https://wa.me/9217017881' target='_blank'>
              <FaWhatsapp className='text-2xl text-green-700 hover:text-white transition' />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`flex items-center text justify-between px-4 md:px-20 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-2'
        }`}
      >
        {/* LOGO */}
        <img
          src='/logo/nav-logo2.png'
          alt='Logo'
          className={`transition-all duration-300 rounded-md ${
            isScrolled ? 'h-12 w-20' : 'h-20 w-28'
          }`}
        />

        {/* DESKTOP MENU */}
        <nav className='hidden lg:flex items-center gap-10 text-3xl'>
          <Link to='/' className='hover:text-white'>
            Home
          </Link>
          {/* OUR WORK DROPDOWN (Desktop) */}
          <div className='relative group cursor-pointer'>
            <span className='flex items-center gap-2 hover:text-white'>
              What We Do <ChevronDown size={22} />
            </span>

            <div className='absolute -left-20 hidden group-hover:block bg-zinc-800 border border-yellow-600 rounded-md mt-0 w-100 py-3'>
              {workList.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className='block px-3 text-2xl py-2 hover:bg-zinc-600'
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* <Link to='/socielevents' className='hover:text-white'>
            Premium & Luxuray Events
          </Link> */}

          <Link to='/gallery' className='hover:text-white'>
            Gallery
          </Link>

          <Link to='/about' className='hover:text-white'>
            About
          </Link>

          <Link to='/contactus' className='hover:text-white'>
            Contact Us
          </Link>

          
        </nav>

        {/* MOBILE ICON */}
        <button
          onClick={toggleMenu}
          className='lg:hidden text-[#D4A017] text-3xl'
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className='lg:hidden bg-black border-t border-yellow-500'>
          <nav className='flex flex-col px-4 space-y-4 py-5 text-lg'>
            <Link to='/' onClick={toggleMenu} className='hover:text-white'>
              Home
            </Link>
{/* 
            <Link
              to='/socielevents'
              onClick={toggleMenu}
              className='hover:text-white'
            >
              Social Events
            </Link> */}

            {/* MOBILE OUR WORK DROPDOWN */}
            <div>
              <button
                onClick={() => setOpenWork(!openWork)}
                className='flex items-center justify-between w-full'
              >
                What We Do{' '}
                <ChevronDown className={`${openWork ? 'rotate-180' : ''}`} />
              </button>

              {openWork && (
                <div className='pl-5 mt-2 space-y-2'>
                  {workList.map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      onClick={toggleMenu}
                      className='block'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
              <Link
              to='/about'
              onClick={toggleMenu}
              className='hover:text-white'
            >
              About us
            </Link>
            <Link
              to='/contactus'
              onClick={toggleMenu}
              className='hover:text-white'
            >
              Contact
            </Link>

            <Link
              to='/gallery'
              onClick={toggleMenu}
              className='hover:text-white'
            >
              Gallery
            </Link>

            <div className='flex items-center gap-6 pt-3'>
              <FaInstagram className='text-2xl hover:text-white' />
              <FaWhatsapp className='text-2xl hover:text-white' />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
