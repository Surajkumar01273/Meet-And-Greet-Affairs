import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const ContactStrip = () => {
  return (
    <div className='w-full border border-[#bfbfbf] flex flex-row my-6'>
      {/* EMPTY LEFT SPACE */}
      <div className='flex-1 bg-[#f3f3f3] h-20 md:h-30 border-r border-[#bfbfbf]'></div>

      {/* CALL US NOW */}
      <a
        href='tel:9217017881'
        className='flex-1 bg-[#e5e6e8] h-20 md:h-30 flex items-center justify-center
                   border-r border-[#bfbfbf]
                   text-xl md:text-3xl lg:text-4xl font-semibold
                   text-[#D4A017] px-4 whitespace-nowrap'
      >
        Call Now
      </a>

      {/* GET IN TOUCH */}
      {/* GET IN TOUCH */}
      <a
        href='https://wa.me/919217017881'
        target='_blank'
        rel='noopener noreferrer'
        className='flex-1 bg-[#e5e6e8] h-20 md:h-30 flex items-center justify-center
             border-r border-[#bfbfbf]
             text-xl md:text-3xl lg:text-4xl font-semibold
             text-[#D4A017] px-4 whitespace-nowrap'
      >
        Get in Touch
      </a>

      {/* ARROW BLOCK */}
      {/* <div
        className='flex w-24 h-30 bg-[#f3f3f3] items-center justify-center 
                   border-r border-[#bfbfbf]'
      >
        <FiArrowRight size={32} className='text-gray-700' />
      </div> */}

      {/* EMPTY RIGHT SPACE */}
      <div className='flex-1 bg-[#f3f3f3] h-20 md:h-30'></div>
    </div>
  );
};

export default ContactStrip;
