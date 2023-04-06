import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero6 from '../Hero/Hero6';

export default function ShowcasePortfolioHome() {
  pageTitle('Showcase Portfolio');
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
      title: 'MR. WRONG',
      imgUrl: '/images/slider_6.jpeg',
      href: '/case-study/case-study-details',
      thumb: '/images/slider_6_1.jpeg',
    },
    {
      title: 'A MIAMI LOVE <br/> STORY',
      imgUrl: '/images/slider_7.jpeg',
      href: '/case-study/case-study-details',
      thumb: '/images/slider_7_1.jpeg',
    },
    {
      title: 'LOVE and <br/> Reality',
      imgUrl: '/images/slider_5.jpeg',
      href: '/case-study/case-study-details',
      thumb: '/images/slider_5_1.jpeg',
    },
  
  ];

  return (
    <Hero6
      heroSocialLinks={heroSocialLinks}
      socialLinksHeading="Follow Us"
      showcaseData={showcaseData}
    />
  );
}
