import React from 'react';
import './footer.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";

/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Technical Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://x.com/MutongaRomeo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 32 32">
                        <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,
                        6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,
                        8.4,12.015h-3.447l-6.854-9.804h0Z">
                        </path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/romeo-mutonga-31a5761ba/"><FaLinkedinIn /></a>
                <a href="https://web.whatsapp.com"><FaWhatsapp /></a>
                <a href="https://github.com/jezreel-x"><FaGithubAlt /></a>
            </div >

            <div className="footer__copyright">
                <small>&copy; <b>2025</b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer