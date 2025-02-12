import React from 'react';
import CV from '../../assets/MUTONGA-CV.pdf'

const CVSection = () => {
    return (
        <div>
            <div className='cta'>
                <a href={CV} download className='btn'>
                    Download CV</a>
                <a href="#contact" className='btn btn-primary'>Contact for more info</a>
            </div>
        </div>
    )
}

export default CVSection;