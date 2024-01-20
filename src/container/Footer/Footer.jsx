import React from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import Form from './SubContainers/Form';


const Footer = () => {

    return (
        <>
            {/* Heading */}
            <div className='app__header-text app__flex'>

                <h2 className="head-text">
                    Hit me up at the <span>Email or phone.</span>
                    <br /> 
                    if you'd like to continue ours as of now <span>one-sided conversation</span>
                </h2>

            </div>


            {/* Email and Phone Buttons */}
            <div className="app__footer-cards">

                <div className="app__footer-card  curvy-border">
                    <img src={images.email} alt="email" />
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=siddharths.singhs@gmail.com" 
                        target='_blank'
                        rel="noreferrer"
                        className="p-text"
                    >
                        siddharths.singhs@gmail.com
                    </a>
                </div>

                <div className="app__footer-card curvy-border">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+91 7906482970" className="p-text">+91 8808803655</a>
                </div>

            </div>

            {/* Form */}
            <Form />
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);