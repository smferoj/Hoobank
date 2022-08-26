import React from 'react';
import './tesimonial.css';
import {Row, Col } from 'react-bootstrap';
import NewCard from '../newCard/NewCard';



const Testimonial = () => {
  return (
    <section id='testimonial'>
      <div className="container testimonial_container">
        <div className="testimonial_head">
          <Row>
            <Col md={6}>
              <div className="testi_head">
                <h1> What people are </h1>
                <h1>  saying about us </h1>
              </div>
            </Col>
            <Col md={6}>
              <div className="testi-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos distinctio nihil quidem. Temporibus, officiis repudiandae.</p>
              </div>
            </Col>
          </Row>
        </div>
        {/* ============testimonial slider============= */}
        <div className="testimonial_slider">
        <NewCard />

        </div>
      </div>
    </section>
  )
}

export default Testimonial








