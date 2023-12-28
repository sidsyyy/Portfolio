import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../../client';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


function ProjectCard(props) {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ opacity: 0.75 }}
            className="app__work-item app__flex"
        >

            <div
                className="app__work-img app__flex"
            >

                <img src={urlFor(props.item.imgUrl)} alt={props.item.name} />

                {/* Project Links Both Live and Code. */}
                <motion.div
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className="app__work-hover app__flex"
                >
                    {/* Live Project Button */}
                    {props.item.projectLink && (
                        <a href={props.item.projectLink} target="_blank" rel="noreferrer">
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillEye />
                            </motion.div>
                        </a>
                    )}

                    {/* Project Code Button */}
                    {props.item.codeLink && (
                        <a href={props.item.codeLink} target="_blank" rel="noreferrer">
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.90] }}
                                transition={{ duration: 0.25 }}
                                className="app__flex"
                            >
                                <AiFillGithub />
                            </motion.div>
                        </a>
                    )}

                </motion.div>

            </div>

            {/* Project Title and Description. */}
            <div className="app__work-content app__flex">
                <h4 className="bold-text">{props.item.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{props.item.description}</p>
            </div>

        </motion.div>
    )
}



export default ProjectCard;