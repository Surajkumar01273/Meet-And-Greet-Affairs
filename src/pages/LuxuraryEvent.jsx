import React from 'react';
import ThemeHead from '../components/ThemeHead';
import ServiceBanner from '../components/ServiceBanner';
import Enquiry from '../components/Enquiry';
import SocielTheme from '../components/SocialTheme';
import { birthday, customThemeData, premiumData } from '../data';
import ServiceCard from '../components/ServiceCard';

const LuxuraryEvent = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <ServiceBanner
        title='Sociel And Family Event Decoration'
        subtitle='Home › Premium & Luxury Events'
        backgroundImage={bannerImage}
      />
      <ThemeHead servicesData={premiumData} title="Premium & Luxury Events" />
      <SocielTheme anniversaryThemeData={customThemeData} />
       <ServiceCard services={birthday} />
       <Enquiry />
    </>
  );
};

export default LuxuraryEvent;
