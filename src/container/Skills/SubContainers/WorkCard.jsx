import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import moment from 'moment';


function WorkCard(props) {
    // const date = ;
    console.log(props);

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
                <p className='p-text-small'>
                    {moment(props.item.fromDate).format("MMMM YYYY")} - {(props.item.isWorking)?"Working" : moment(props.item.toDate).format("MMMM YYYY")}
                </p>
                <p className='p-text-small'>{props.item.location}</p>
            </motion.div>

            <ReactTooltip
                id={props.item._key}
                effect="solid"
                arrowColor="#fff"
                className="app__tooltip"
                float={true}
                delayHide={500}
            >
                {(props.item.desc)}
            </ReactTooltip>
        </>
    )
};


export default WorkCard;