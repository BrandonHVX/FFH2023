import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Hero7 from '../Hero/Hero7';

export default function CaseStudyShowcaseHome() {
  pageTitle('Case Study Showcase');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: 'Instagram',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

  const showcaseData = [
    {
      title: 'Mr. Wrong',
      imgUrl: '/images/slider_6.jpeg',
      href: '/film_showcase',
      link: 'Watch Trailer',
    },
    {
      title: 'A Miami Love <br /> Story',
      imgUrl: '/images/slider_7.jpeg',
      href: '/1st_take_youth_film_program',
      link: 'Watch Trailer',
    },
    {
      title: 'Love and <br /> Reality',
      imgUrl: '/images/slider_5.jpeg',
      link: 'Watch Trailer',
    },
  
   
  ];
  return (
    <>
      <Hero7
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow Us"
        showcaseData={showcaseData}
      />
    </>
  );
}
