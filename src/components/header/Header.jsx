// import React, { useEffect, useState } from 'react';
import './header.css';
import CVSection from './CVSection';
import TextAnimation from './TextAnimation';

const Header = () => {

    /*
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);
    */

    return (
        <header>
            <div className="container header__container">
                <h5>Hello there...</h5>
                {/* <p>{width}px</p> */}
                <h1>Mutonga Romeo</h1>
                <TextAnimation />
                <CVSection />

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
};

export default Header;