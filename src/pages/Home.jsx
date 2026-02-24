import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import EventPlanner from '../components/EventPlanner';
import OurWorkSection from '../components/OurWorkSection';
import ConceptMood from '../components/ConceptMood';
import UpcomingEvents from '../components/Upcomming';
import Testimonial from '../components/Testimonial';
import FollowUs from '../components/FollowUs';
import {
  // anniversary,
  // baby,
  // birthday,
  followusimages,
  gallery,
  // haldi,
  // married,
  // festival,
  // socialThemeData,
  // anniversaryThemeData,
  // babyThemeData,
  // haldiThemeData,
  // gurujiThemeData,
  // corporateEventData,
  // WorkshopsData,
  // premiumData,
} from '../data';
import ContactStrip from '../components/ContactStrip';
import PlanningEvents from '../components/PlanningEvents';
import Enquiry from '../components/Enquiry';
// import HomeServiceTheme from '../components/HomeServiceTheme';
import Banner from '../components/Banner';
// import SocialTheme from '../components/SocialTheme';
// import ThemeHead from '../components/ThemeHead';

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Banner />
      <WhyChooseUs />
      {/* <EventPlanner /> */}
      <OurWorkSection />

      <ConceptMood />
      <UpcomingEvents />
      <Testimonial />
      <FollowUs images={followusimages} title='Follow Us' hide={"hidden"}/>
      <ContactStrip />
      <FollowUs images={gallery} title=' Gallery' link="/gallery"/>
      <PlanningEvents />
      <Enquiry />
    </div>
  );
};

export default Home;
