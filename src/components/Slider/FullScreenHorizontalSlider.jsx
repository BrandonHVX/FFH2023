import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import parse from 'html-react-parser';
import Div from '../Div';

export default function FullScreenHorizontalSlider({ data }) {
  return (
    <Div className="cs-swiper_arrow_style_1">
      <Div className="swiper-button image-swiper-button-next">
        Next <Icon icon="bi:arrow-right" />
      </Div>
      <Div className="swiper-button image-swiper-button-prev">
        <Icon icon="bi:arrow-left" /> Prev
      </Div>
      <Swiper
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
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
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
                          opacity: 0.9,
                      
                          
              
              }}
              ></Div>
            <Div
              className="cs-hero cs-style4 cs-bg"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
         
              <Link  className="cs-hero_link" />

              <div className='container'>
              <div className='row justify-content-center align-items-center'>
              <div className='col-md-6'>
              <Div className="cs-hero_text">
              <img src={item.thumb} width={250}/>
              
              </Div>
                
</div>
<div className='col-md-6'>
<Div className="cs-hero_text">
<h2 className="cs-hero_title">{parse(item.title)}</h2>
                <Link  className="cs-btn cs-style1 cs-type1">
                    <span>Watch Trailer</span>
                  </Link>
          
              </Div>
                
</div>
              </div>
             </div>
             
            </Div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
}
