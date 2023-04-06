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
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

  const showcaseData = [
    {
      title: 'FLORIDA FILM <br /> HOUSE',
      imgUrl: '/images/slider_1.jpeg',
      href: '/film_showcase',
      link: 'Watch Films',
    },
    {
      title: '1ST TAKE YOUTH <br /> FILM PROGRAM',
      imgUrl: '/images/slider_2.jpeg',
      href: '/1st_take_youth_film_program',
      link: 'View Program',
    },
    {
      title: 'URBAN FILM <br /> FESTIVAL',
      imgUrl: '/images/slider_3.jpeg',
      link: 'Submit Films',
    },
    {
      title: 'WORLD WIDE URBAN  <br /> DISTRIBUTION ',
      imgUrl: '/images/slider_4.jpeg',
      href: '/case-study/case-study-details',
      link: 'View Company',
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
