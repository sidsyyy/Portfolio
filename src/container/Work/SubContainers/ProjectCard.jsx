import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../../client';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


function ProjectCard(props) {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            className="app__card app__flex"
        >
            <img onClick={()=> {
                    if(props.item.codeLink) window.open(props.item.codeLink);
                    else if(props.item.projectLink) window.open(props.item.projectLink);
                }} 
                src={urlFor(props.item.imgUrl)} 
                alt={props.item.name} 
                style={{cursor:'pointer'}}
            />

            <h2 className="bold-text head-text-decoration">{props.item.title}</h2>

            {/* Project Links Both Live and Code. */}
            <motion.div
                className="app__work-hover app__flex"
            >
                {/* Live Project Button */}
                {props.item.projectLink && (
                    <a href={props.item.projectLink} target="_blank" rel="noreferrer">
                        <AiFillEye />
                    </a>
                )}

                {/* Project Code Button */}
                {props.item.codeLink && (
                    <a href={props.item.codeLink} target="_blank" rel="noreferrer">
                        <AiFillGithub />
                    </a>
                )}

            </motion.div>

            
            <p className="p-text" style={{ marginTop: 10 }}>{props.item.description}</p>

        </motion.div>
    )
}



export default ProjectCard;