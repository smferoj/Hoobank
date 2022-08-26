import React from 'react';
import './payment.css';
import {Row, Col} from 'react-bootstrap'
import BillImg from '../../assets/card.png'
const Payment = () => {
  return (
    <section id='payment'>
      <div className="container">
        <Row>
          <Col md={6} className='pay_text_container'>
            <div className="pay_text">
              <h1> Easliy Controm Your billing invoicing </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto.</p>
            </div>
            <button className='btn'>Get Started</button>
          </Col>
          <Col md={6}>
            <div className="pay_img">
              <img src={BillImg} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Payment