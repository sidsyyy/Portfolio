import React from 'react';
import './Header.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';



const Header = () => {
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };


    return (
        <div className='app__header app__flex'>

            {/* Text Intro */}
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >

                <div className='app__header-badge'>

                    <motion.div className='badge-cmp app__flex'
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ opacity: 0.75 }}
                    >

                        <span>👋</span>

                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>
                                Hi There, my name is
                            </p>
                            <h1 className='head-text'>Priyansh Singh</h1>
                        </div>

                    </motion.div>

                    <motion.div className='tag-cmp app__flex '
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ opacity: 0.75 }}>

                        <p className='p-text'>I do Competitive Programming</p>
                        <p className='p-text'>and Develop</p>
                        <p className='p-text'>Games, Apps and Websites</p>

                    </motion.div>

                </div>

            </motion.div>


            {/* Avatar and Background of Avatar */}
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delayChildren: 1 }}
                className="app__header-img"
            >

                <img src={images.profile} alt="profile_bg" />

                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1.5, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile-circle"
                    className='overlay_circle'
                />

            </motion.div>


            {/* Technology Logos */}
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >

                {[images.flutter, images.Unity, images.react].map(
                    (circle, index) => (

                        <motion.div
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ opacity: 0.75 }}
                            className='circle-cmp app__flex'
                            key={`circle-${index}`}
                        >

                            <img src={circle} alt="circle" />

                        </motion.div>
                    )
                )}

            </motion.div>

        </div >
    )
}

export default AppWrap(
    MotionWrap(Header, 'app__about'),
    'home',
    'app__whitebg',
);