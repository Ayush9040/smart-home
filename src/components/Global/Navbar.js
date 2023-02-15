import React from 'react';
import ReactDOM  from 'react-dom';
import classes from '../../scss/components/Navbar/Navbar.module.scss';

const Navbar = () => {
    return(
        <>
            <div className={classes.Navbar__wrapper}>
            <nav className={classes.Navbar}>
                <ul className={classes.Navbar__content__links}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Testimonials</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li className={classes.logo__container}>
                        <a className={classes.logo}>smartHome</a>
                    </li>
                </ul>

                

                <div>
                    <ul className={classes.Navbar__right}>
                        <li><a className={classes.Navbar__login}>Login</a></li>
                        <li><a><button className={classes.Navbar__signup}>Sign Up</button></a></li>
                    </ul>
                </div>
            </nav>
            </div>
        </>
    )
}


export default Navbar;