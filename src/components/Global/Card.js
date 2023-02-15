import React from 'react';
import Classes from '../../scss/components/Card.module.scss';
import image from '../images/image.png';

function Card() {
  return (
    <div className={Classes.Card}>
        <div className={Classes.Card__wrapper}>
            <p className={Classes.Card__content}> our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions</p>
            <div className={Classes.Card__profile}>
                <img className={Classes.Card__profile__img} src={image} />
                <div className={Classes.Card__profile__desc}>
                    <p className={Classes.Card__desc__one}>Cham</p>
                    <p className={Classes.Card__desc__two}>Product designer</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card