import React from 'react'
import { motion } from 'framer-motion';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>

            {['home', 'about', 'work', 'skills', 'certificates', 'contact'].map(
                (item, index) => (
                    <>
                        <motion.div
                            key={item + index}

                            whileInView={{ scale: 1.5 }}
                            whileHover={{ scale: 2.5 }}

                            onClick={() => { window.open(`#${item}`, '_self') }}
                            className="app__navigation-dot"
                            style={active === item ? { backgroundColor: '#313BAC' } : {}}
                        />
                    </>
                )
            )}
        </div>
    )
}

export default NavigationDots