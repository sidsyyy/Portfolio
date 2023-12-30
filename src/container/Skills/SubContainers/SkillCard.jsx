import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../../client';


function SkillCard(props) {
    const dragVariant = {
        dragElastic: 1,
        dragConstraints: {
            top: -25,
            left: -25,
            right: 25,
            bottom: 25,
        },
        dragSnapToOrigin: true
    }

    return (
        <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale:0.9, opacity: 0.75 }}
            className="app__skills-item app__flex"

            drag
                dragElastic={dragVariant.dragElastic}
                dragConstraints={dragVariant.dragConstraints}
                dragSnapToOrigin={dragVariant.dragSnapToOrigin}
        >
            <div className="app__flex">
                <img draggable={false} src={urlFor(props.item.icon)} alt={props.item.name} />
            </div>

            <p className="p-text">{props.item.name}</p>
        </motion.div>
    )
};

export default SkillCard;