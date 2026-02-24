import React, { useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ServiceTheme({ title, desc, services }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className='relative bg-black py-6 overflow-hidden'>
      {/* 🎉 Section Heading */}
      <div className='relative text-center mb-2'>
        <h2 className='text-2xl md:text-5xl font-extrabold text-[#D4A017] drop-shadow-md'>
          {title}
        </h2>
        <div className='flex items-center justify-center gap-4 py-6'>
          <div className='w-40 h-1 bg-[#D4A017]'></div>
          <div className='w-6 h-2 bg-[#0B2154]'></div>
          <div className='w-40 h-1 bg-[#D4A017]'></div>
        </div>
        <p className='text-gray-700 mt-3 text-sm md:text-base max-w-3xl mx-auto'>
          {desc}
        </p>
      </div>

      {/* ⬅️➡️ Carousel Buttons */}
      <div className='flex justify-between px-4 md:px-20 mb-4'>
        <button
          onClick={scrollLeft}
          className='bg-[#D4A017] p-3 rounded-full text-black hover:bg-yellow-500 transition'
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className='bg-[#D4A017] p-3 rounded-full text-black hover:bg-yellow-500 transition'
        >
          <FaChevronRight />
        </button>
      </div>

      {/* 🎁 Carousel Container */}
      <div
        ref={carouselRef}
        className='flex gap-6 px-4 md:px-20 overflow-x-auto scroll-smooth no-scrollbar'
        style={{ scrollBehavior: 'smooth' }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className='flex-shrink-0 relative rounded-3xl overflow-hidden bg-[#F4E8C1] backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group'
          >
            {/* 🖼️ Image */}
            {/* <Link to={service.link}> */}
              <div className='overflow-hidden rounded-t-3xl relative'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-80 h-80 md:h-80 object-center transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
              </div>
            {/* </Link> */}

            {/* 📋 Content */}
            <div className='py-2 md:py-6 px-4 flex flex-col justify-between'>
              <h3 className='text-xl font-bold text-center text-black md:mb-4 group-hover:text-[#D4A017] transition'>
                {service.title}
              </h3>

              {/* 🔘 Buttons */}
              <div className='mt-5'>
                <div className='flex justify-between gap-3'>
                  <a
                    href='tel:+919217017881'
                    className='bg-black p-5 rounded-full hover:scale-110 transition'
                  >
                    <FaPhoneAlt className='text-white text-lg' />
                  </a>

                  <a
                    href={`https://wa.me/919217017881?text=${encodeURIComponent(
                      "Hello! I'm interested in your decoration services. Please share more details."
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#D4A017] py-2 md:py-3 text-md flex items-center justify-center md:text-xl px-4 text-black font-semibold rounded-full hover:scale-110 transition'
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>

            {/* ✨ Glow Border */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl pointer-events-none bg-gradient-to-br from-[#ff9a8b]/20 to-[#ffd36f]/20 blur-xl'></div>
          </div>
        ))}
      </div>
    </section>
  );
}
