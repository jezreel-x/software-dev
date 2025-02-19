import React from 'react';
import CV from '../../assets/MUTONGA-CV.pdf'

const CVSection = () => {

    // const [hover, setHover] = React.useState(false);

    return (
        <div>
            <div className='cta'>
                <a href={CV} download className='btn'>
                    Download CV</a>
                <a href="#contact" className='btn btn-primary'>Contact for more info</a>
                {/*
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <button
                        className={`button ${'hover' ? 'hovered' : ''}`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        Hover Me
                    </button>
                </div>
                */}
            </div>
        </div>
    )
}

export default CVSection;