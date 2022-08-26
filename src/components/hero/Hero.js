import React from "react";
import "./hero.css";
import { Row, Col } from "react-bootstrap";
import robotImage from "../../assets/robot.png";
import discountSvg from "../../assets/Discount.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero_container">
        <Row>
          <Col md={7}>
            <div className="hero_text_container">
              <div className="discount-msg">
                <img src={discountSvg} alt="" />
                <span> 20% DISCOUNT FOR 1 MONTH ACCOUNT </span>
              </div>
              <div className="hero-text">
                <h1> The Next</h1>
                <h1> Generation</h1>
                <h1> Payment Method.</h1>
              </div>
              <div className="hero-para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  quas beatae magnam tempore nesciunt doloremque eius nostrum
                  fugiat laborum.
                </p>
              </div>
              <div className="start_btn">
              <button className="btn"> Get Start</button>
              </div>
         
               
            </div>
          </Col>
          <Col md={5} className="robot_img">
            <img src={robotImage} alt="" />
          </Col>
        </Row>
             {/*=========== Statistics section =========== */}
        <div className= "hero_statistics">
         
            <div className="active-user">
              <h2>3500+</h2>
              <p> Users Actice</p>
            </div>
      
            <div className="trusted-company">
              <h2>230+</h2>
              <p> Trusted Company</p>
            </div>
        
            <div className="transction">
              <h2>230+</h2>
              <p> Transaction</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
