import React from 'react';
import FollowUs from '../components/FollowUs';
import { gallery } from '../data';
import ServiceBanner from '../components/ServiceBanner';
import Enquiry from '../components/Enquiry';

const SocielEvents = () => {
  const bannerImage = '/banner/banner1.jpg';
  return (
    <div className='mt-36'>
      <ServiceBanner
        title='Social Events'
        subtitle='Home › Social Events'
        backgroundImage={bannerImage}
      />
      <FollowUs images={gallery} title='Social Events' />
      <Enquiry />
    </div>
  );
};

export default SocielEvents;
