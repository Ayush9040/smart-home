import React from 'react';
import Classes from '../../scss/components/Client/Client.module.scss';
import Logos from '../images/Logos.png';

function Client() {
  return (
    <div className={Classes.Client}>
        <h2 className={Classes.Client__heading}><span className={Classes.Client__heading__style}>Our</span> Client</h2>
        <p className={Classes.Client__content}>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon 
him call mile. An pasture he himself believe ferrars besides cottage.</p>

        <img className={Classes.Clients__photos} src={Logos} />
    </div>
  )
}

export default Client