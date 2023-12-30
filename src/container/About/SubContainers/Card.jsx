import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../../client';


function Card(props) {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            className="app__card curvy-border"
        >
            <img src={urlFor(props.item.imgUrl)} alt={props.item.title} />

            <h2 className='bold-text head-text-decoration' style={{ marginTop: 20 }}>{props.item.title}</h2>

            <p className='p-text' style={{ marginTop: 10 }}>{props.item.description}</p>
            
        </motion.div>
    )
}

export default Card;