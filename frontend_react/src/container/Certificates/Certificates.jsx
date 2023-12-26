import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certificates.scss';

const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [certificates, setCertificates] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "certificates"]';

        client
            .fetch(query)
            .then((data) => {
                setCertificates(data);
                setFilterWork(data);
            })
            .catch((err) => { console.log(err.message); });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);

        setTimeout(() => {

            if (item === 'All') {
                setFilterWork(certificates);
            } else {
                setFilterWork(certificates.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <motion.div className='app__header-text app__flex'
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ opacity: 0.75 }}
            >
                <h2 className='head-text'>Certificates <span>&</span> Achievements</h2>
            </motion.div>

            <div className="app__certificates-filter">
                {["Unity", "Cyber Security", "Programming", "Internship", "Other", "All"].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__certificates-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {filterWork.length && (
                <>
                    <div className="app__certificates-item app__flex">
                        <div className="app__certificates-content">
                            <h2 >{filterWork[currentIndex].name}</h2>
                            <div>
                                <h4 className="bold-text">{filterWork[currentIndex].by}</h4>
                                <h5 className="p-text">Issue Date : {filterWork[currentIndex].issueDate}</h5>
                            </div>
                        </div>
                        <img src={urlFor(filterWork[currentIndex].imgurl)} alt={filterWork[currentIndex].name} />
                    </div>

                    <div className="app__certificates-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? filterWork.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === filterWork.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Certificates, 'app__certificates'),
    'certificates',
    'app__primarybg',
);