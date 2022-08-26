import React from 'react'
import './contact.css';
import{Row, Col} from 'react-bootstrap';
import ContainerLogo from '../../assets/logo.svg'
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';
import {AiOutlineLinkedin} from 'react-icons/ai';

const Contact = () => {
  return (
     <section id="contact">
        <div className="container">
            <Row className='first_row'>
                <Col md={4} >
                    <div className="container_img">
                    <img src={ContainerLogo} alt="" />
                    </div> 
                    <div className="container_para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium tenetur accusamus.</p>
                    </div>  
                </Col>              
                <Col md={3} >
                <div className="contact_head">
                    <h3> Useful Links</h3>
                    <p> Contact</p>
                    <p> How it works</p>
                    <p> Create</p>
                    <p> Explore</p>
                    <p> Terms and Service</p>
                </div>             
                </Col>
                <Col md={3}>
                <div className="contact_head">
                    <h3> Community</h3>
                    <p> Partners</p>
                    <p> Suggesstions</p>
                    <p> Blog</p>
                    <p> Newsletters</p>    
                </div>
                </Col>
                <Col md={2}>
                <div className="contact_head">
                    <h3> Partner</h3>
                    <p> Our Partner</p>
                    <p> Become a Partner</p> 
                </div> 
                </Col>
            </Row>
            <Row className='second_row'>
                <Col md={8}>
                     <div className="copyright">
                        <p> Copyright <AiOutlineCopyrightCircle/> 2021HooBank.AllRightReserved</p>
                     </div>
                </Col>
                <Col md={4}>
                     <div className="contact_icon">
                     <AiOutlineInstagram className="Cont_icon" />
                     <AiOutlineFacebook className="Cont_icon" />
                     <FiTwitter className="Cont_icon" />
                     <AiOutlineLinkedin className="Cont_icon" />
                     </div>
                </Col>               
            </Row>
        </div>
     </section>
  )
}

export default Contact;