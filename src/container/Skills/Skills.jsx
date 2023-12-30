import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import SkillCard from './SubContainers/SkillCard';
import ExperienceYear from './SubContainers/ExperienceYearCard';


const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);


    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client
            .fetch(query)
            .then((data) => {
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
            {/* Header */}
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className="head-text">Skills <span>&</span> Experiences</h2>
            </motion.div>



            <div className="app__skills-container">

                {/* Skills */}
                <motion.div className="app__skills-list">

                    {skills.map((skill, idx) => (
                        <SkillCard key={idx} item={skill} />
                    ))}

                </motion.div>

                {/* Work Experiences */}
                <div className="app__skills-exp">

                    {experiences.reverse().map((experience, idx) => (
                        <ExperienceYear key={idx} item={experience}/>
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