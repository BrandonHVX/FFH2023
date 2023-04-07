import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper';

import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import 'swiper/css';
import 'swiper/css/pagination';
import Div from '../Div';







export default function FullScreenVerticalSlider({ data }) {
 
  return (
    <>
      <Div className="cs-vertical_slider cs-swiper_arrow_style_1">
      
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          loop={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className="mySwiper"
          navigation={{
          
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
                       <Div
                className=""
                style={{ backgroundColor: 'black',
                          position:"absolute",
                          height: "100%",
                          width: "100%",
                          opacity: 0.8,
                         
                      
                          
              
              }}
              ></Div>
              <Div
                className="cs-hero cs-style5 cs-bg"
                style={{ backgroundImage: `url(${item.imgUrl})`
               
                
                         
                
                ,
              backgroundColor: 'black' }}
              >
             
                <Div className="cs-hero_text">
                  <h2 className="cs-hero_title">{parse(item.title)}</h2>
                  
                  <Link  className="cs-btn cs-style1 cs-type1">
                    <span>{item.link}</span>
                  </Link>
                </Div>
              </Div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Div>
    </>
  );
}
