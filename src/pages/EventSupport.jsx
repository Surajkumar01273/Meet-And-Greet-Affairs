import React from 'react';
import ServiceBanner from '../components/ServiceBanner';
import ThemeHead from '../components/ThemeHead';
import Enquiry from '../components/Enquiry';
import SocielTheme from '../components/SocialTheme';
import { birthday, gameThemeData, supportData } from '../data';
import ServiceCard from '../components/ServiceCard';

const EventSupport = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <ServiceBanner
        title='Event Support Services'
        subtitle='Home › Event Support Services'
        backgroundImage={bannerImage}
      />
      <ThemeHead servicesData={supportData} title='Event Support Services' />
      <SocielTheme anniversaryThemeData={gameThemeData} />
      <ServiceCard services={birthday} />
      <Enquiry />
    </>
  );
};

export default EventSupport;
