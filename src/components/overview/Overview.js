import React from 'react';
import './overview.css';
import{Row, Col} from 'react-bootstrap';
import StarIcon from '../../assets/Star.svg'
import SecureIcon from '../../assets/Shield.svg'
import BalanceIcon from '../../assets/Send.svg'


const Overview = () => {
  return (
     <section className="overview">
        <div className="container overview_container">
            <Row>
             <Col md={7} className='overview_text-container'>
             <div className="overview_text">
                <h1> You do the business,</h1>
                <h1> We will handle money.</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem molestias dolore non incidunt repellendus saepe eaque veritatis, adipisci totam!</p>
             </div>
             <button className='btn'>Get Started</button>
             </Col>

             <Col md={5} className='overview_icons'>

              <div className="rewards">
                <div className="_icon">
                  <img src={StarIcon} alt="" />
                </div>
                <div className="rewards_text">
                    <h3>Rewards</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto.</p>
                </div>
              </div>
              <div className="secure">
              <div className="_icon">
                  <img src={SecureIcon} alt="" />
                </div>
                <div className="secure_text">
                    <h3>100% Secured</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto.</p>
                </div>
              </div>
               <div className="balance">
               <div className="_icon">
                  <img src={BalanceIcon} alt="" />
                </div>
                <div className="balance_text">
                    <h3>balance Transfer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto.</p>
                </div>
              </div>
             </Col>
            </Row>
        </div>
     </section>
  )
}

export default Overview;