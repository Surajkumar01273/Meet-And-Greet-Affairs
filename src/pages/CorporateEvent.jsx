import React from 'react';
import ThemeHead from '../components/ThemeHead';
import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
import SocielTheme from '../components/SocialTheme';
import { birthday, corporateData, corporateThemeData } from '../data';
import ServiceCard from '../components/ServiceCard';

const CorporateEvent = () => {
    const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
     <ServiceBanner
        title='Corporate & Professional Events'
        subtitle='Home › Corporate & Professional Events'
        backgroundImage={bannerImage}
      />
     <ThemeHead servicesData={corporateData} title="Corporate & Professional Events" />
      <SocielTheme anniversaryThemeData={corporateThemeData} />
      <ServiceCard services={birthday} />
      <Enquiry />
    </>
  );
};

export default CorporateEvent;
