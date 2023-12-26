import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className="head-text">Hit me up at the <span>Email or phone.</span><br /> if you'd like to continue ours as of now <span>one-sided conversation.</span></h2>
            </motion.div>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:priyanshkumar001@gmail.com" className="p-text">priyanshkumar001@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+91 7906482970" className="p-text">+91 7906482970</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text"
                            type="text"
                            placeholder="Your Name"
                            name="username"
                            value={username}
                            onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            onChange={handleChangeInput} />
                    </div>
                    <div className='app__flex'>
                        <textarea
                            className="p-text"
                            placeholder="Your Message..."
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);