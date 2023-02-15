import React from 'react'
import classes from '../../scss/components/Hero/Hero.module.scss';
import Herophone from '../images/Herophone.png';
import AppStore from '../images/AppStore.png';
import Download from '../images/download.png';

function Hero() {
  return (
    <>
        <div className={classes.Hero}>
            <div className={classes.Hero__container}>
                <div className={classes.Hero__content}>
                  <h1 className={classes.hero__heading}>Smart Home Application</h1>
                  <p className={classes.hero__content}>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                </div>
                <div>
                  <img className={classes.hero__img} src={Herophone} />
                </div>
                <div className={classes.hero__btn}>
                  <img className={classes.hero__img} src={AppStore} />
                  <img className={classes.hero__img} src={Download} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero