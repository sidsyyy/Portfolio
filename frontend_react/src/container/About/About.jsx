import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';




const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "about"]';

        (async ()=>{
            await client
            .fetch(query)
            .then((data) => { setAbouts(data) })
            .catch((err) => { console.log(err.message)});
        })();
    }, [])

    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }



    return (
        <>
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className='head-text'>Algorithm: <span>Word used by programmers</span><br /> when they don’t want to <span>explain what they did.</span></h2>
            </motion.div>

            <div className='app__profiles'>
                {
                    abouts.sort(dynamicSort("id")).map(
                        (about, index) => (
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ opacity: 0.75 }}
                                className="app__profile-item"
                                key={about.title + index}
                            >
                                <img src={urlFor(about.imgUrl)} alt={about.title} />
                                <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                                <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                            </motion.div>
                        )
                    )
                }
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);