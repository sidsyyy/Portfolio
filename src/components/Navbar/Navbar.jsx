import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';
import { client } from '../../client';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [url, setUrl] = useState();
    const [enableSidebar, setEnableSideBar] = useState(false);

    async function getResumeURL() {
        const query = `*[_type == 'resume'][0] {"firstAssetURL": resume.asset->url}`;

        await client
            .fetch(query)
            .then((data) => {
                console.log(data);
                setUrl(data.firstAssetURL);
            })
            .catch((err) => { console.log(err) });
    }

    useEffect(() => {
        getResumeURL();
    }, [])



    return (
        <nav className='app__navbar'>

            <div className='app__navbar-logo'>
                <a href='#home' >
                    <img src={images.logo} alt="logo" />
                </a>
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

                <a className='p-text' href={url} target="_blank" rel="noreferrer">Resume <span>⬇</span></a>

                <HiMenu onClick={() => {
                    setToggle(true);
                    setEnableSideBar(true);
                }} />

                {
                    (
                        enableSidebar && <motion.div
                            style={{ zIndex: (toggle ? 20 : -100) }}
                            whileInView={{ opacity: (toggle ? [0, 1] : [1, 0]) }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >

                            <motion.div
                                whileInView={{ opacity: (toggle ? [0, 1] : 0) }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <a href="https://www.instagram.com/mathe_magician_/"
                                    target="_blank"
                                    rel='noreferrer'>
                                    <BsInstagram />
                                </a>

                                <a href="https://github.com/Code-Magician"
                                    target="_blank"
                                    rel='noreferrer'>
                                    <BsGithub />
                                </a>

                                <a href="https://www.linkedin.com/in/priyansh-singh-31a7391b4/"
                                    target="_blank"
                                    rel='noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a href="" onClick={
                                    (e) => {
                                        e.preventDefault();

                                        setToggle(false);

                                        setTimeout(() => {
                                            setEnableSideBar(false);
                                            console.log("disabled");
                                        }, 1000);
                                    }
                                }>
                                    <HiX />
                                </a>

                            </motion.div>


                            <motion.ul
                                whileInView={{ opacity: (toggle ? [0, 1] : 0) }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                {
                                    ['home', 'about', 'work', 'skills', 'certificates', 'contact'].map(
                                        (item) => (

                                            <li key={item}>{
                                                <a href={`#${item}`} onClick={() => {
                                                    setToggle(false);

                                                    setTimeout(() => {
                                                        setEnableSideBar(false);
                                                        console.log("disabled");
                                                    }, 1000);
                                                }}>
                                                    {item}
                                                </a>
                                            }
                                            </li>
                                        )
                                    )
                                }
                            </motion.ul>

                        </motion.div>
                    )
                }

            </div>

        </nav >
    )
}

export default Navbar