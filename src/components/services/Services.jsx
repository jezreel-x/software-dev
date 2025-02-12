import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Know</h5>
            <h2>Achievement & Accomplishments</h2>

            <div className="container services__containter">

                <article className="service">
                    <div className="service__head">
                        <h3>Information Security Learning Path</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Computer Networking</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Open Source Platforms and Network Administration</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Risk Management in Information Systems</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Web Security</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Network & Computer Forensics</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Ethical Hacking and Offensive Security</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Incident Response</p>
                        </li>
                    </ul>
                </article>
              

                
                <article className="service">
                    <div className="service__head">
                        <h3>Courses and Certifications</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Pre Security </b>Course Certificate on TryHackMe</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b><i>Computer Networking Essentials</i></b> Course on Cisco</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b><i>Web Design & Development</i></b> Course on Coursera</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b><i>Cryptography & Network Security</i></b> Course Certificate on Simplilearn and Neso Academy</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b><i>Python | HTML | CSS | JavaScript | React </i></b> Course on w3Schools</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b><i>Cybersecurity: White-Hat Ethical Hacking</i></b> Course Certificate on Pirple</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b><i>Linux Essentials</i></b> Course on Simplilearn</p>
                        </li>
                    </ul>
                </article>
               

                
                <article className="service">
                    <div className="service__head">
                        <h3>OS Platforms</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows 11</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows Server 2012 r2 </p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Kali Linux</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Ubuntu</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>BackTrack</p>
                        </li>
                    </ul>
                </article>
               

            </div>
        </section>
    )
}

export default Services