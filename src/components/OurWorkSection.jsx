import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    img: '/service/sociel1.jpg',
    title: 'Social & Family Celebrations',
    subtitle: '& Decoration',
    link: '/what-we-do/sociel-an-dfamilyevent',
  },
  {
    img: '/service/corporate.jpg',
    title: 'Corporate & Professional Events',
    subtitle: '& Decoration',
    link: '/what-we-do/corporate-and-profeshionalevent',
  },
  {
    img: '/service/premium.jpg',
    title: 'Premium & Luxury Events',
    subtitle: '& Decoration',
    link: '/what-we-do/premium-and-luxury-events',
  },
  {
    img: '/service/allevent.jpg',
    title: 'All Event Support Services',
    subtitle: '& Decoration',
    link: '/what-we-do/eventsupport-and-services',
  },
  // {
  //   img: "/justmarried/married1.jpg",
  //   title: "Just Married Events",
  //   subtitle: "& Decoration",
  //   link: "/just-married-decoration",
  // },
  // {
  //   img: "/festival/ganesh1.jpg",
  //   title: "Ganesh Chaturthi Events",
  //   subtitle: "& Decoration",
  //   link: "/festival-decoration",
  // },
  // {
  //   img: "/festival/christmas3.jpg",
  //   title: "Christmasday Events",
  //   subtitle: "& Decoration",
  //   link: "/festival-decoration",
  // },
  // {
  //   img: "/festival/new-year3.jpg",
  //   title: "New Year Events",
  //   subtitle: "& Decoration",
  //   link: "/festival-decoration",
  // },
];

export default function OurWorkSection() {
  return (
    <section className='w-full bg-black py-16 text-white'>
      <h2 className='text-center text-3xl lg:text-5xl font-[Playfair_Display] text-[#D4A017] font-bold tracking-widest mb-16'>
        Services
      </h2>
      {/* <div className="flex items-center justify-center gap-4 pt-2 mb-16">
          <div className="w-36 h-[2px] bg-[#D4A017]"></div>
          <div className="w-6 h-1 bg-[#0B2154]"></div>
          <div className="w-36 h-[2px] bg-[#D4A017]"></div>
        </div> */}

      <div className='max-w-8xl mx-auto px-4 lg:px-20'>
        {/* GRID LAYOUT */}
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl shadow-md overflow-hidden text-center'
            >
              <div className='relative'>
               <Link to={item.link}>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-full h-60 md:h-72 object-center transition-transform duration-700 hover:scale-110'
                />
               </Link>
              </div>

              <h3 className='text-xl md:text-2xl font-semibold py-3 font-serif text-black leading-tight'>
                <Link to={item.link}>{item.title}</Link>
                {/* {item.subtitle} */}
              </h3>

              <a
                href='tel:9217017881'
                className='my-3 inline-block bg-[#D4A017] text-black cursor-pointer rounded-tr-3xl rounded-bl-3xl text-lg font-bold px-6 py-2 shadow hover:bg-yellow-600 transition-all'
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
