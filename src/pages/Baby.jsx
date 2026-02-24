import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { baby } from '../data';
import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';

const Baby = () => {
  const bannerImage = '/baby/baby1.jpg';
  return (
    <div className='mt-40'>
      <ServiceBanner
        title='Baby Shower Decoration'
        subtitle='Home › Baby Shower Decoration'
        backgroundImage={bannerImage}
      />
      <ServiceTheme services={baby} title='Baby Shower Decoration' />
      <Enquiry />
    </div>
  );
};

export default Baby;
