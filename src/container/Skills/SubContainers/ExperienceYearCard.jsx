import React from "react";
import { motion } from 'framer-motion';
import WorkCard from "./WorkCard";


function ExperienceYear(props) {
    return (
        <motion.div
            className="app__skills-exp-item curvy-border"
            style={{borderColor:'var(--white-color)'}}
        >
            <div className="app__skills-exp-year">
                <p className="bold-text">{props.item.year}</p>
            </div>

            <motion.div className="app__skills-exp-works">

                {props.item.works.map((work, idx) => (
                    <WorkCard key={idx} item={work} />
                ))}
            </motion.div>

        </motion.div>
    )
};


export default ExperienceYear;