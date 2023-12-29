import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';
import { client } from '../../client';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [url, setUrl] = useState();

    
    async function getResumeURL() {
        const query = `*[_type == 'resume'][0] {"firstAssetURL": resume.asset->url}`;

        await client
            .fetch(query)
            .then((data)=> { 
                setUrl(data.firstAssetURL);
            })
            .catch((err) => { console.log(err)});
    }

    useEffect(()=>{
        getResumeURL();
    }, [])



    return (
        <nav className='app__navbar'>

            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>

            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'certificates', 'contact', 'Resume'].map(
                    (item) => (
                    <li key={`link-${item}`} className='app__flex p-text'>
                        <div />
                        {
                            (item !== 'Resume') ?
                                <a href={`#${item}`}>{item}</a> :
                                    <a href={url} target="_blank" rel="noreferrer">{item} <span>⬇</span></a>
                        }
                    </li>
                )
                )}
            </ul>

            <div className='app__navbar-menu'>

                <HiMenu onClick={() => setToggle(true)} />
                
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >

                            <HiX onClick={() => setToggle(false)} />

                            <ul>
                                {['home', 'about', 'work', 'skills', 'certificates', 'contact', 'Resume'].map(
                                    (item) => (

                                    <li key={item}>{
                                        (item !== 'Resume') ?
                                            <a href={`#${item}`} onClick={() => setToggle(false)}>
                                                {item}
                                            </a> : <a href={url} target="_blank" rel="noreferrer">{item} <span>⬇</span></a>
                                    }
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    )
                }

            </div>

        </nav >
    )
}

export default Navbar