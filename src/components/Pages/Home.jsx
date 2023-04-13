import React, { useEffect } from 'react';
// import Card from '../Card';
import CaseStudy from '../CaseStudy';
import Hero from '../Hero';
import Cta from '../Cta';
import Portfolio2 from '../Portfolio/Portfolio2';
import Portfolio3 from '../Portfolio/Portfolio3';
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
      name: 'Instagram',
      links: 'https://www.instagram.com/floridafilmhouse',
    },
    {
      name: 'Youtube',
      links: 'https://www.youtube.com/@FloridaFilmHouse',
    },
  ];

  const portfolioData = [
    {
      title: 'World Wide Urban Distribution',
      subtitle: 'Company Spotlight',
      btnText: 'View Company',
      btnLink: '/portfolio/portfolio-details',
      imageUrl: '/images/portfolio_35.jpeg',
     
    },

 
  ];
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    

      {/* Start Hero Section */}
      <Hero
        title="Team of passionate <br/> filmmakers"
        subtitle="Working together to tell stories of their communities to their generation."
       
        btnLink="/contact"
        scrollDownId="#projects"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg_8.jpeg"
      />
      
      {/* End Hero Section */}
  
   {/* Start Video Block Section */}
   <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
       Developed in-house team of more than 
        30 filmmakers, and vertically integrated the business from service productions 
        to their own six feature films.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=ReNvKLlP2uY"
          bgUrl="/images/video_bg_3.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

 {/* Start About Section */}
 <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="1st Take Youth Film Program, dedicated to teaching underprivileged youth ."
              subtitle="Latest News"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              The 1st Take Youth Film Program is an afterschool program dedicated 
              to teaching underprivileged youth career and life skills through the 
              hands-on process of filmmaking. The 1st Take Youth Film Program has 
              become an outlet for underserved local youth with a new perspective to
               dream beyond the limited opportunities within their communities. 
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/slider_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}






 

  {/* Start Portfolio Section */}
  <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ),
      )}
      {/* End Portfolio Section */}

       {/* Start CTA Section */}
      
     
       <Div className="container text-center">
      <Div className="cs-section_heading cs-style1">
              <h3 className="cs-section_subtitle">Advertisement</h3>
          
           
         
            </Div>
        <Cta
          title="Urban Film Festival 2023"
          btnText="Submit Your Film"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
    
      {/* End Portfolio Section */}



   

     

   

     

     
    </>
  );
}
