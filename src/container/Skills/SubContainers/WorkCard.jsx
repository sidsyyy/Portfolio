import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'


function WorkCard(props) {
    console.log(props.item);

    return (
        <>
            <motion.div
                data-tooltip-id={props.item._key}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
            >
                <h4 className="bold-text">{props.item.name}</h4>
                <p className="p-text">{props.item.company}</p>
            </motion.div>

            <ReactTooltip
                id={props.item._key}
                effect="solid"
                arrowColor="#fff"
                className="app__tooltip"
                float={true}
            >
                {props.item.desc}
            </ReactTooltip>
        </>
    )
};


export default WorkCard;