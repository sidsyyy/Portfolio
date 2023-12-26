import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client
            .fetch(query)
            .then((data) => {
                console.log(data);
                setExperiences(data);
            })
            .catch((err) => { console.log(err.message); });

        client
            .fetch(skillsQuery)
            .then((data) => {
                setSkills(data);
            })
            .catch((err) => { console.log(err.message); });
    }, []);

    return (
        <>
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className="head-text">Skills <span>&</span> Experiences</h2>
            </motion.div>


            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <motion.div
                                whileInView={{ scale: 1, opacity: 1 }}
                                whileHover={{ opacity: 1.5 }}
                                whileTap={{ opacity: 0.75 }}
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </motion.div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);