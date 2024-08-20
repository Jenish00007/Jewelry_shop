import React from 'react';
import fanta from '../Assets/pic1.png';
import { useEffect } from 'react';
import { gsap } from 'gsap';

function Products() {

  useEffect(() => {
    gsap.to('#blue-box',{
      x:300,
      duration:2
    })
    gsap.to('#blue-box',{
   
      y:300,
      scale:2,
      duration:2,
      ease:'back.inOut'
    })
  })
  return (
    <div>
      <div className='mt-20'>
        <img id='blue-box' style={{ width:'7%' }} src={fanta} alt="" />
      </div>
    </div>
  );
}

export default Products;
