import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { married } from '../data';
import ServiceBanner from '../components/ServiceBanner';

const Justmarried = () => {
  const bannerImage = '/justmarried/married1.jpg';
  return (
    <div>
      <ServiceBanner
        title='Anniversary Decoration'
        subtitle='Home › Just Married Decoration'
        backgroundImage={bannerImage}
      />
      <ServiceTheme services={married} title='Pre-Wedding Decoration' />
    </div>
  );
};

export default Justmarried;
