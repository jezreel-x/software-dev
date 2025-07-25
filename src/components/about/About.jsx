import React from 'react'
import './about.css'
import myImage from '../../assets/profile-photo.jpg';
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={myImage} alt='' />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Intermediate</small>
                        </article>
                        

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certificates</h5>
                            <small><b>The React Crash Course</b></small><br />
                            <small><b>The Node.js Masterclass</b></small><br />
                            <small><b>Frontend Fundamentals and more...</b></small><br />
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>3+ Completed including a web and mobile app for rentals - AirHousing</small>
                        </article>
                    </div>

                    <p>
                    Results-driven Software Engineer with 2+ years of experience in Web design and development, 
                    Mobile App Development using languages and technologies such as HTML, CSS, JavaScript, React,
                    React Native, Next,js coupled with backend technologies such as MySQL, PHP, Laravel.
                    </p>


                    <p>
                    Always looking to create user-friendly and compelling User Interfaces with a seamless 
                    User Experience by transforming designs into functional code that solve real-world problems.
                    </p>
                   

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;