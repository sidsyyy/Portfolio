import React, { useState, useEffect } from 'react';
import './Certificates.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import Labels from './SubContainers/Labels';
import Card from './SubContainers/Card';

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [filteredCertificates, setFilteredCertificate] = useState([]);
    const [activeTag, setActiveTag] = useState('All');


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
                items={filteredCertificates}
            />

            {/* Certificate Card and Buttons to Navigate them. */}
            {filteredCertificates.length && (
                <Card
                    items={filteredCertificates}
                />
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Certificates, 'app__certificates'),
    'certificates',
    'app__primarybg',
);