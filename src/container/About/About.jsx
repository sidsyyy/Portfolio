import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import Card from './SubContainers/Card';




const About = () => {
    const [abouts, setAbouts] = useState([]);


    // Fetching data from backend.
    useEffect(() => {
        const query = '*[_type == "about"]';

        client
            .fetch(query)
            .then((data) => {
                setAbouts(data.sort((a, b) => a.id - b.id));
            })
            .catch((err) => { console.log(err.message) });
    }, []);


    return (
        <>
            {/* Heading */}
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className='head-text'>
                    Algorithm: <span>Word used by programmers</span>
                    <br />
                    when they don’t want to <span>explain what they did.</span>
                </h2>
            </motion.div>

            {/* About List Items Container */}
            <div className='app__profiles'>
                { abouts.map(item => (<Card key={item._id} item={item} />)) }
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);