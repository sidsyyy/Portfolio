import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../../client';


function Card(props) {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ opacity: 0.75 }}
            className="app__profile-item"
        >
            <img src={urlFor(props.item.imgUrl)} alt={props.item.title} />

            <h2 className='bold-text' style={{ marginTop: 20 }}>{props.item.title}</h2>

            <p className='p-text' style={{ marginTop: 10 }}>{props.item.description}</p>
            
        </motion.div>
    )
}

export default Card;