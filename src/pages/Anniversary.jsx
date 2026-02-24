import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { anniversary } from '../data';
import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';

const Anniversary = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <div className='mt-40'>
      <ServiceBanner
        title='Anniversary Decoration'
        subtitle='Home › Anniversary Decoration'
        backgroundImage={bannerImage}
      />
      <ServiceTheme services={anniversary} title='Anniversary Decoration' />
      <Enquiry />
    </div>
  );
};

export default Anniversary;
