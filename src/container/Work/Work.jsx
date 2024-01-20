import React, { useState, useEffect } from 'react';
import './Work.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import ProjectCard from './SubContainers/ProjectCard';
import Labels from './SubContainers/Labels';

const Work = () => {
    const [projects, setProjects] = useState([]);
    const [activeProjects, setActiveProjects] = useState([]);
    const [activeProjectsTag, setActiveProjectsTag] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [tagsCountArray, setTagsCountArray] = useState([]);
    const tagsArray = ['Android', 'Other', 'All'];

    async function countTags(data) {
        let temp = [];

        for (const tag of tagsArray) {
            let cnt = 0;

            for (const item of data) {
                if (item.tags.includes(tag)) cnt++;
            }

            console.log(tag + " " + cnt);
            temp.push(cnt);
        }

        await setTagsCountArray(temp);
    }


    useEffect(() => {
        const query = '*[_type == "works"]';

        client
            .fetch(query)
            .then((data) => {
                setProjects(data);
                setActiveProjects(data);

                countTags(data);
            })
            .catch((err) => { console.log(err.message); });
    }, []);


    const handleProjectFilter = (tag) => {
        setActiveProjectsTag(tag);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (tag === 'All') {
                setActiveProjects(projects);
            } else {
                setActiveProjects(projects.filter((project) => project.tags.includes(tag)));
            }
        }, 500);
    };


    return (
        <>
            {/* Heading */}
            <div className='app__header-text app__flex'>
                <h2 className="head-text"> {activeProjectsTag} <span>Projects</span></h2>
            </div>

            {/* Project Tags */}
            <Labels 
                onClick={handleProjectFilter}
                tag={activeProjectsTag}
                tags={tagsArray}
                tagsCount={tagsCountArray}
            />


            {/* All Projects */}
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {activeProjects.map((project, index) => (
                    <ProjectCard key={index} item={project} />
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    'app__primarybg',
);