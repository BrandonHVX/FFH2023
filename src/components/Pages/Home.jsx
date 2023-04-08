import React, { useEffect } from 'react';
// import Card from '../Card';

import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
// import Cta from '../Cta';
// import LogoList from '../LogoList';
// import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
// import PostSlider from '../Slider/PostSlider';
// import TestimonialSlider from '../Slider/TestimonialSlider';
// import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
// import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';

export default function Home() {
  pageTitle('Home');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Team of passionate <br/>mfilmmakers"
        subtitle="Working together to tell stories of their communities to their generation."
       
        btnLink="/contact"
        scrollDownId="#projects"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}
   {/* Start Video Block Section */}
   <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
        11 years mentoring young talent, developing an in-house team of more than 
        30 filmmakers, and vertically integrating their business from service productions 
        to their own six feature films.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=ReNvKLlP2uY"
          bgUrl="/images/video_bg_3.jpeg"
        />
      </Div>
      {/* End Video Block Section */}
    
      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div id="projects">
        <Div className="container">
          <SectionHeading
            title="Latest Projects"
            subtitle="About Our Company"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}



   

     

   

     

     
    </>
  );
}
