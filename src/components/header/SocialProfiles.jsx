import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialProfiles = () => {
    return (
        <div className='social-profiles'>
            <a href="https://www.linkedin.com/in/nguyenvu2608/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/nguyenvu1310" target="_blank"><FaGithub /></a>
        </div>
    )
}

export default SocialProfiles;