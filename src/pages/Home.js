import React, { useEffect, useRef } from 'react';
import './style.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


// Importing images

import girl1 from '../Assets/girl1.png';
import girl2 from '../Assets/girl2.png';
import girl3 from '../Assets/girl3.png';
import girl4 from '../Assets/girl4.png';
import girl5 from '../Assets/girl5.png';
import girl6 from '../Assets/girl6.png';
import fanta from '../Assets/pic1.png';
import logoImage from '../Assets/logo.png';
import model1 from '../Assets/model1.png';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import Earings_view from '../components/Earings_view';

gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    // Timeline for the first scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 65%",
        scrub: true,
        width: "22%",
        duration:2
      }
    });

    tl.to("#fanta", {
      top: "128%",
      left: "62.5%",
      width: "22%",
    });

    // Timeline for the second scroll trigger
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third",
        top:10,
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        width: "22%",
      }
    });

    tl2.to("#fanta", {
      width: "22%",
      top: "230%",
      left: "14%",
    });
  }, []);

  return (
    <div id="main">

      <div className="one">
      <img style={{marginRight:'50%',width:'22%',marginTop:'-3%'}} id="fanta" src={model1} alt=""/>
        <img style={{marginTop:30}} src={girl1} alt="" />
        <div className="rght-two">
          <h1>REVOLUTIONIZING
            RETAIL WITH
            AUGMENTED REALITY
          </h1>
          <div className="company-info">
            <img id='logo' style={{ height: 100 }} src={logoImage} alt="Company Logo" />
            <h2>RemarkablyAI</h2>
          </div>
        </div>
      </div>

      <div className="two">
        <div className="left-two">
          <h1>About Us</h1>
          <p>Welcome to RemarkablyAI. We're redefining retail with
            augmented reality (AR) for Jewellery and Wrist Watches.
            Our innovative platform bridges virtual and physical worlds,
            enhancing customer engagement and driving sales. Join
            us in revolutionizing the retail experience.</p>

        </div>
        <div className="right-two">
          <img  id='girl3' src={girl3} alt="" />
        </div>
      </div>

  
      <div className="third">

        <div className="right-two">
          <img  id='girl3' src={girl6} alt="" />
        </div>
        <div className="left-three">
          <h1>Product Benefits</h1>
          <li> Efficient & hassle-free Virtual Try-on.</li>
          <li> Smart analytics on customer interactions.</li>
          <li> Enabling retailers to optimize stock.</li>
          <li> Enhance their inventory.</li>
          <li> Tailor marketing strategies.</li>
          <li> Reduced Returns.</li>
          <li>  Increase User Engagement.</li>

        </div>
      </div>

      <Earings_view />
      <Footer />

    </div>

  );
}

export default Home;
