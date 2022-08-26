import React from 'react';
import './bill.css';
import { Row, Col } from 'react-bootstrap';
import AppStore from '../../assets/apple.svg'
import GooglePlay from '../../assets/google.svg'
import BillImg from '../../assets/bill.png'

const Bill = () => {
  return (
    <section className="bill">
      <div className="container bill_container">
        <Row>
          <Col md={6}>
            <div className="bill_img">
              <img src={BillImg} alt="" />
            </div>
          </Col>
          <Col md={6} className='bill_text_container'>

            <div className="bill_text">
              <h1> Easliy Controm Your billing invoicing </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto.</p>
              <div className="app">
                <div className="app_store">
                  <img src={AppStore} alt="" />
                </div>
                <div className="google_play">
                  <img src={GooglePlay} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Bill