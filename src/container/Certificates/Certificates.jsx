import React, { useState, useEffect } from 'react';
import './Certificates.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Labels from './SubContainers/Labels';
import Card from './SubContainers/Card';

const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [certificates, setCertificates] = useState([]);
    const [filteredCertificates, setFilteredCertificate] = useState([]);
    const [activeTag, setActiveTag] = useState('All');


    // Setting Current Index of item.
    const handleClick = async (index) => {
        setCurrentIndex(index);
    };


    // Fetching Result from the backend.
    useEffect(() => {
        const query = '*[_type == "certificates"]';

        client
            .fetch(query)
            .then((data) => {
                setCertificates(data);
                setFilteredCertificate(data);
            })
            .catch((err) => { console.log(err.message); });
    }, []);


    // Filter Items Based on tag passed as an argument.
    const handleFilter = async (tag) => {
        setActiveTag(tag);
        setCurrentIndex(0);

        if (tag === 'All') {
            await setFilteredCertificate(certificates);
        } else {
            await setFilteredCertificate(certificates.filter((certificate) => certificate.tags.includes(tag)));
        }
    };


    return (
        <>
            {/* Heading */}
            <div className='app__header-text app__flex'>
                <h2 className='head-text'>Certificates <span>&</span> Achievements</h2>
            </div>

            {/* Filter Labels */}
            <Labels
                onClick={handleFilter}
                activeTag={activeTag}
            />

            {/* Certificate Card and Buttons to Navigate them. */}
            {filteredCertificates.length && (
                <>
                    {/* Certificate Card */}
                    <Card
                        id={currentIndex}
                        items={filteredCertificates}
                    />

                    {/* Left Right Buttons */}
                    <div className="app__certificates-btns app__flex">

                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? filteredCertificates.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === filteredCertificates.length - 1 ? 0 : currentIndex + 1)}>
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