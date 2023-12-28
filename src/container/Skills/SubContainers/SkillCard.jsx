import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../../client';


function SkillCard(props) {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
        >
            <motion.div
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ opacity: 1.5 }}
                whileTap={{ opacity: 0.75 }}
                className="app__flex"
                style={{ backgroundColor: props.item.bgColor }}
            >
                <img src={urlFor(props.item.icon)} alt={props.item.name} />
            </motion.div>

            <p className="p-text">{props.item.name}</p>
        </motion.div>
    )
};

export default SkillCard;