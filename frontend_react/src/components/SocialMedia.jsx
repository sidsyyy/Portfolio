import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/priyansh-singh-31a7391b4/"
                    target="_blank"
                    rel='noreferrer'>
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/Code-Magician"
                    target="_blank"
                    rel='noreferrer'>
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/mathe_magician_/"
                    target="_blank"
                    rel='noreferrer'>
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia