import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { festival } from '../data';
import ServiceBanner from '../components/ServiceBanner';

const Festival = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <div>
      <ServiceBanner
        title='Guruji Satsang'
        subtitle='Home › Guruji Satsang'
        backgroundImage={bannerImage}
      />
      <ServiceTheme services={festival} title='Guruji Satsang' />
    </div>
  );
};

export default Festival;
