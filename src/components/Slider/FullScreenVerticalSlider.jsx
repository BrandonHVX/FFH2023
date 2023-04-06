import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import parse from 'html-react-parser';
import 'swiper/css';
import 'swiper/css/pagination';
import Div from '../Div';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default function FullScreenVerticalSlider({ data }) {
  const [modalShow, setModalShow] = React.useState(false);
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
