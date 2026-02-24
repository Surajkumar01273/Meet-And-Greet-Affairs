import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { birthday } from '../data';
import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
// import ServiceBanner from '../components/ServiceBanner'

const Birthday = () => {
  const bannerImage = '/birthday/birthday2.jpeg';
  return (
    <div className='mt-40'>
      <ServiceBanner
        title='Birthday Decoration'
        subtitle='Home › Birthday Decoration'
        backgroundImage={bannerImage}
      />
      <ServiceTheme services={birthday} title='Birthday Decoration' />
      <Enquiry />
    </div>
  );
};

export default Birthday;
