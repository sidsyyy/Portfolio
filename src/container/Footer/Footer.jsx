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
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ opacity: 0.75 }}
            >

                <h2 className="head-text">
                    Hit me up at the <span>Email or phone.</span>
                    <br /> 
                    if you'd like to continue ours as of now <span>one-sided conversation.</span>
                </h2>

            </motion.div>


            {/* Email and Phone Buttons */}
            <div className="app__footer-cards">

                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=priyanshkumar001@gmail.com" 
                        target='_blank'
                        rel="noreferrer"
                        className="p-text"
                    >
                        priyanshkumar001@gmail.com
                    </a>
                </div>

                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+91 7906482970" className="p-text">+91 7906482970</a>
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