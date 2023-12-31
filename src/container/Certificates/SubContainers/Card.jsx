import * as React from 'react';
import '../Certificates.scss';
import { urlFor } from '../../../client';
import moment from 'moment';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Tooltip as ReactTooltip } from 'react-tooltip';


function Card(props) {
    const [[page, direction], setPage] = useState([0, 0]);

    const variants = {
        enter: (direction) => {
            return {
                x: parseInt(direction) > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: parseInt(direction) < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(parseInt(offset)) * parseInt(velocity);
    };

    const imageIndex = wrap(0, props.items.length, page);

    const paginate = (newDirection) => {
        setPage([page + parseInt(newDirection), parseInt(newDirection)]);
    };



    return (
        <div className="app__certificates-item app__flex curvy-border">
            <div className="app__certificates-content">

                <h6 className='bold-text'>{imageIndex + 1} / {props.items.length} </h6>
                <h2 >{props.items[imageIndex].name}</h2>

                <div>
                    <h4 className="bold-text">{props.items[imageIndex].by}</h4>
                    <h5 className="p-text">
                        Issue Date : {moment(props.items[imageIndex].issueDate, "YYYY-MM-DD").format("D MMM YYYY")}
                    </h5>
                </div>

            </div>

            <div className='app_certificates-image-container app__flex'>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        data-tooltip-id={props.items[imageIndex].name}

                        src={urlFor(props.items[imageIndex].imgurl)}

                        custom={direction}
                        variants={variants}

                        initial="enter"
                        animate="center"
                        exit="exit"

                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}

                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}

                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}

                        onDoubleClick={() => {
                            window.open(urlFor(props.items[imageIndex].imgurl), '_blank');
                        }}
                    />
                    <ReactTooltip
                        id={props.items[imageIndex].name}
                        effect="solid"
                        arrowColor="#fff"
                        className="app__tooltip"
                        float={true}
                    >
                        Double Click to Download
                    </ReactTooltip>
                </AnimatePresence>
                <div className="next app__flex" onClick={() => paginate(1)}>
                    {"‣"}
                </div>
                <div className="prev app__flex" onClick={() => paginate(-1)}>
                    {"‣"}
                </div>
            </div>

        </div>
    );
}

export default Card;