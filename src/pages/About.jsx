import React from 'react'
import HeroAbout from '../components/about/AboutHero'
// import WhoWeAre from '../components/about/WhoWeAre'
// import MissionVision from '../components/about/MissionVission'
import WhyChooseUs from '../components/about/WhyChooseUs'
import Founder from '../components/about/Founder'
import AboutCTA from '../components/about/AboutCTA'
import ServiceBanner from '../components/ServiceBanner'

const Contactus = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
       <ServiceBanner
        title='Sociel And Family Event Decoration'
        subtitle='Home › about'
        backgroundImage={bannerImage}
      />
      {/* <WhoWeAre />
      <MissionVision /> */}
      <Founder />
      <WhyChooseUs />
      <AboutCTA />
    </>
  )
}

export default Contactus
