import React from 'react';
import {Col } from 'react-bootstrap';
import './newCard.css';
import CardImg from '../../assets/quotes.svg';
// images of tesimonial============ 
import ProfileOne from '../../assets/people01.png';
import ProfileTwo from '../../assets/people02.png';
import ProfileThree from '../../assets/people03.png';
import ProfileFour from '../../assets/me.jpg';
import {Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles===================

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const data =[
    {
        profileImg:ProfileOne,
        name: 'Herman Jensen',
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, temporibus repudiandae dignissimos iste quam, neque quisquam accusamus sequi vero alias nobis culpa.',
        designation:'Fonunder and Leader'
    },   
    {
        profileImg:ProfileTwo,
        name: 'Steve Waha',
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, temporibus repudiandae dignissimos iste quam',  
        designation:'CEO'
    },
    {
        profileImg:ProfileThree,
        name: 'Mashu Zara',
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, temporibus repudiandae dignissimos iste quam, neque quisquam accusamus sequi vero alias nobis culpa.',
        designation:'Managing Director'
    },
    {
        profileImg:ProfileFour,
        name: 'SM Feroj',
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, temporibus repudiandae.',
        designation:' Team Leader'
    },
]
const Testimonial = () => {
  return (
    <section id='card'>
      <div className="container testimonial_container">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
        
          {data.map(({ profileImg, name, text, designation}, index) =>{
            return (
                <SwiperSlide key={index} className ='slider'>
                <Col md={12}>
                    <div className="card_container">
                    <div className="card">
                      <div className="card_img">
                        <img src={CardImg} alt="" />
                      </div>
                      <div className="card_para">
                      <p>{text}</p>
                      </div>
                      <div className="profile">
                        <div className="profile_img">
                          <img src={profileImg} alt="" />
                        </div>
                        <div className="profile_desc">
                          <h3> {name} </h3>
                          <p> {designation}</p>
                        </div>
                      </div>
                    </div>
                    </div>                  
                  </Col>        
                </SwiperSlide>
            );
          })}
          </Swiper>

        </div>
    </section>
  )
}

export default Testimonial