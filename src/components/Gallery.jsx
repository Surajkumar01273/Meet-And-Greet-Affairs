import React from 'react';
import { motion } from 'framer-motion';
import Enquiry from '../components/Enquiry';
import ServiceBanner from './ServiceBanner';

export default function SimpleGallery() {
  const bannerImage = '/banner/banner1.jpg';
  const gallery = [
    { id: 1, src: 'home-img/event2.jpg', title: 'Birthday Luxury Decor' },
    { id: 2, src: 'home-img/jurney5.jpg', title: 'Wedding Mandap Setup' },
    { id: 3, src: 'home-img/event3.jpg', title: 'Wedding Decoration' },
    { id: 4, src: '/gallery/haldi2.jpg', title: 'Haldi Celebration' },
    { id: 5, src: '/gallery/haldi4.jpg', title: 'Haldi Deocration' },
    { id: 6, src: '/gallery/anniversary.jpg', title: 'Anniversary Decoration' },
    { id: 7, src: '/gallery/self2.JPG', title: 'M&G Affairs' },
    { id: 8, src: '/home-img/event1.jpg', title: 'Premium Decoration' },
    { id: 9, src: '/gallery/birthday2.jpeg', title: 'Birthday Decoration' },
    { id: 10, src: '/gallery/baby1.jpg', title: 'Baby Shower Decoration' },
    { id: 11, src: '/gallery/outdoor.jpg', title: 'Outdoor Decoration' },
    { id: 12, src: '/haldi/haldi3.jpg', title: 'Haldi Decoration' },
    { id: 13, src: '/gallery/haldi5.jpg', title: 'Haldi Decoration' },
    { id: 14, src: '/banner/banner4.jpg', title: 'Founder' },
    { id: 15, src: '/gallery/self1.JPG', title: 'M&G Affairs' },
    { id: 16, src: '/gallery/birthday3.jpeg', title: 'Birthday Decoration' },
    { id: 17, src: '/home-img/celebrate.jpeg', title: 'Celebrate' },
    { id: 18, src: '/gallery/anniversary.jpeg', title: 'Anniversary Celebration' },
    { id: 19, src: '/game/endto3.jpeg', title: 'End to End Celebration' },
    { id: 20, src: '/game/endto1.jpeg', title: 'End to End Celebration' },
  ];

  return (
    <>
      <div className='mt-40'>
        <ServiceBanner
          title='Gallery'
          subtitle='Home › Gallery'
          backgroundImage={bannerImage}
        />
        <section className='bg-gradient-to-b bg-black py-16 px-4 lg:px-20 relative'>
          {/* Decorative top blurred color */}
          <div className='pointer-events-none absolute inset-x-0 -top-10 blur-[90px] opacity-20'>
            <div className='mx-auto w-[60%] h-32 bg-rose-200 rounded-full'></div>
          </div>

          <div className='max-w-7xl mx-auto text-center mb-12'>
            <h2 className='text-3xl md:text-5xl text-[#D4A017] font-bold'>
              Event Gallery
            </h2>
            <p className='mt-2 text-[#f5e7c3] text-lg'>
              Premium curated collection from our most loved events.
            </p>
          </div>

          {/* 3–4 Row Mixed Layout */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl shadow-md bg-white 
              ${index % 5 === 0 ? 'md:row-span-2' : ''}
            `}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500'
                />

                {/* Title Overlay */}
                <div
                  className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
              flex items-end p-3 transition-all duration-500'
                >
                  <p className='text-white text-xl font-semibold'>
                    {item.title}
                  </p>
                </div>

                {/* Decorative corner shape */}
                <div className='absolute -top-4 -right-4 opacity-30'>
                  <div className='w-16 h-16 bg-white rounded-full shadow-inner'></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <Enquiry />
      </div>
    </>
  );
}
