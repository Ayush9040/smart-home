import React from 'react';
import classes from '../../scss/components/AboutUs/AboutUs.module.scss';
import About1 from '../images/About1.png';


function AboutUs() {
  return (
    <>
        <div className={classes.AboutUs}>
        <h2 className={classes.AboutUs__heading}>About us</h2>

        <div className={classes.AboutUs__first}>
            <div className={classes.AboutUs__image}>
                <img className={classes.AboutUs__fix} src={About1} />
            </div>
            <div className={classes.AboutUs__content}>
                <p className={classes.About1__content__heading}>Smart Home’s  Smart Services</p>
                <p className={classes.About1__content__text}>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <button className={classes.AboutUs__learn}>Learn More</button>
            </div>
        </div>

        <div className={classes.AboutUs__second}>
            <div className={classes.AboutUs__image2}>
                <img className={classes.AboutUs__fix} src={About1} />
            </div>
            <div className={classes.AboutUs__content2}>
                <p className={classes.About1__content__heading}>Smart Home’s  Smart Services</p>
                <p className={classes.About1__content__text}>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <button className={classes.AboutUs__learn}>Learn More</button>
            </div>
        </div>

        <div className={classes.AboutUs__first}>
            <div className={classes.AboutUs__image}>
                <img className={classes.AboutUs__fix} src={About1} />
            </div>
            <div className={classes.AboutUs__content}>
                <p className={classes.About1__content__heading}>Smart Home’s  Smart Services</p>
                <p className={classes.About1__content__text}>Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <button className={classes.AboutUs__learn}>Learn More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs