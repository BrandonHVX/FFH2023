import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Our Films',
      subtitle:'Watch Now',
      href:'/film_showcase',
      src:'/images/slider_1.jpeg'
    },
    {
      title:'1st Take Youth Program',
      subtitle:'View Program',
      href:'/',
      src:'/images/slider_2.jpeg'
    },
    {
      title:'Urban Film Festival',
      subtitle:'Submit Film',
      href:'/',
      src:'/images/slider_3.jpeg'
    },
    {
      title:'World Wide Urban <br /> Distribution',
      subtitle:'View Company',
      href:'/',
      src:'/images/slider_4.jpeg'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: true,
    verticalSwiping: true,
      swipeToSlide: true,
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
