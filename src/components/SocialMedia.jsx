import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className='app__social'>

            <div>
                <a href="http://www.linkedin.com/in/sidsyyy"
                    target="_blank"
                    rel='noreferrer'>
                    <BsLinkedin />
                </a>
            </div>

            <div>
                <a href="https://github.com/sidsyyy"
                    target="_blank"
                    rel='noreferrer'>
                    <BsGithub />
                </a>
            </div>

            <div>
                <a href="https://www.instagram.com/sidsyyy/"
                    target="_blank"
                    rel='noreferrer'>
                    <BsInstagram />
                </a>
            </div>

        </div>
    )
}

export default SocialMedia