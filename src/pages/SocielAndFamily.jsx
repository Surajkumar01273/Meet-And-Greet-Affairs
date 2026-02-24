import React from 'react';
import ServiceBanner from '../components/ServiceBanner';
import ThemeHead from '../components/ThemeHead';
import { anniversary, anniversaryThemeData, baby, babyThemeData, birthday, gurujiThemeData,weddingThemeData, married, servicesData, festival, } from '../data';
import Enquiry from '../components/Enquiry';
import SocielTheme from '../components/SocialTheme';
import ServiceTheme from '../components/ServiceTheme'
import ServiceCard from '../components/ServiceCard';

const SocilAndFamily = () => {
  const bannerImage = '/birthday/birthday2.jpeg';
  return (
    <>
      <ServiceBanner
        title='Social And Family Event Decoration'
        subtitle='Home › Social And Family Event Decoration'
        backgroundImage={bannerImage}
      />
      <ThemeHead servicesData={servicesData} title="Social & Family Celebrations" />
      {/* <ServiceCard services={birthday} title='Birthday Decoration' link='/birthday'/> */}
      <SocielTheme anniversaryThemeData={anniversaryThemeData} />
  
      <ThemeHead servicesData={babyThemeData}  />
   
      <SocielTheme anniversaryThemeData={gurujiThemeData} />
     
     
      <ThemeHead servicesData={weddingThemeData}  />
    


      <ServiceCard services={birthday}/>
       {/* <ServiceCard services={anniversary} />
       <ServiceCard services={baby} /> */}
      <Enquiry />
    </>
  );
};

export default SocilAndFamily;
