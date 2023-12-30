import React from 'react'
import { motion } from 'framer-motion';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>

            {['home', 'about', 'work', 'skills', 'certificates', 'contact'].map(
                (item, index) => (
                    active === item ?
                        (<motion.div
                            key={item + index}
                            animate={{
                                scale: [1.5, 2.5, 2.5, 1.5, 1.5],
                                rotate: [0, 0, 180, 180, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}

                            onClick={() => { window.open(`#${item}`, '_self') }}
                            className="app__navigation-dot"
                            style={{ backgroundColor: 'var(--secondary-color)' }}
                        />) :
                        (<motion.div
                            key={item + index}
                            whileInView={{ scale: 1.2 }}
                            whileHover={{ scale: 2 }}
                            transition={{ ease: "easeOut", duration: 0.3 }}

                            onClick={() => { window.open(`#${item}`, '_self') }}
                            className="app__navigation-dot"
                        />)
                )
            )}
        </div>
    )
}

export default NavigationDots