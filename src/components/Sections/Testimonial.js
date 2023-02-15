import React from 'react'
import Classes from '../../scss/components/Testimonial/Testimonial.module.scss';
import Swiper from '../Elements/Swiper';

function Testimonial() {
  return (
    <div className={Classes.Testimonial}>
        <h2 className={Classes.Testimonial__heading}>Testimonial</h2>
        <p className={Classes.Testimonial__content}>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon 
him call mile. An pasture he himself believe ferrars besides cottage.</p>


    <div className={Classes.Testimonial__review__sec}>
        <Swiper />
    </div>
    </div>
  )
}

export default Testimonial