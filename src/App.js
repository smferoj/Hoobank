
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Overview from "./components/overview/Overview";
import Bill from "./components/bill/Bill";
import Testimonial from "./components/testimonial/Testimonial";
import Payment from "./components/payment/Payment";
import Contact from "./components/contact/Contact";



function App() {
  return (
   
    <>
    <Header />
    <Hero />
    <Overview />
    <Bill />
    <Payment/>
    <Testimonial />
    <Contact />
    
    </>
     
   
   
  );
}

export default App;
