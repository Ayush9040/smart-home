import React from 'react';
import Classes from '../../scss/components/FAQ/FAQ.module.scss';
import FAQ_ACC from '../Elements/FAQ_ACC';

function Faq() {
  return (
    <div className={Classes.FAQ}>
        <h2 className={Classes.FAQ__heading}>FAQ's</h2>

        <div className={Classes.FAQ__ACC}>
            <FAQ_ACC />
        </div>
    </div>
  )
}

export default Faq;