import React from 'react';
import { motion } from 'framer-motion';
import { TiTick } from 'react-icons/ti';

const ThemeHead = ({ servicesData, title }) => {
  return (
    <section className='bg-black py-10 lg:pt-16 lg:pb-4'>
      {/* SECTION HEADING */}
      <div className='text-center mb-16'>
        <h2 className='text-3xl lg:text-5xl font-bold text-[#D4A017]'>
          {title}
        </h2>
        {/* <div className='w-36 h-[2px] bg-[#D4A017] mx-auto mt-3'></div> */}
      </div>

      {servicesData.map((item, index) => {
        const { title, introText, description, offerTitle, offers } =
          item.content;

        return (
          <div
            key={index}
            className='max-w-8xl mx-auto px-4 lg:px-20 grid md:grid-cols-2 gap-12 mb-6 lg:mb-20'
          >
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              {/* SERVICE TITLE */}
              <h3 className='text-2xl lg:text-4xl font-semibold text-[#D4A017]'>
                {title}
              </h3>

              {/* <div className='w-24 h-[2px] bg-[#D4A017]'></div> */}

              {/* INTRO TEXT */}
              <p className='text-xl text-[#D4A017] font-medium'>{introText}</p>

              {/* DESCRIPTION */}
              <p className='text-[#f5e7c3] leading-relaxed max-w-xl text-lg'>
                {description}
              </p>

              {/* OFFERS */}
              <div>
                <h4 className='font-semibold text-[#D4A017] mb-3 text-xl'>
                  {offerTitle}
                </h4>
                <ul className='space-y-2 text-[#f5e7c3] list-disc list-inside'>
                  {offers.map((offer, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <TiTick className='text-[#D4A017] mt-1' />
                      <span className='text-[#f5e7c3] text-lg'>{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className='w-full'
            >
              <img
                src={item.image}
                alt={title}
                className='w-full h-90 lg:h-140 object-cnter rounded-md shadow-lg transition-all duration-700 hover:scale-90'
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default ThemeHead;
