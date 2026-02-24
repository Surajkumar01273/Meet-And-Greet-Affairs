import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { haldi } from '../data';
import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';

const Haldi = () => {
  const bannerImage = '/gallery/haldi1.jpg';
  return (
    <div>
      <ServiceBanner
        title='Haldi Decoration'
        subtitle='Home › Haldi Decoration'
        backgroundImage={bannerImage}
      />
      <ServiceTheme services={haldi} title='Haldi Decoration' />
      <Enquiry />
    </div>
  );
};

export default Haldi;
