import React from 'react';
import './header.css';
import CVSection from './CVSection';
import TextAnimation from './TextAnimation';



const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello there...</h5>
                <h1>Mutonga Romeo</h1>
                <TextAnimation />
                <CVSection />

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
};

export default header;