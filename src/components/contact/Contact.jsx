import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandLinkedin } from 'react-icons/tb';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const data = [
        {
            id: 1,
            icon: <HiOutlineMail className='contact__option-icon' />,
            title: `Email`,
            text: `romeomutonga3@gmail.com`,
            socialMediaPlatform: `mailto:romeomutonga3@gmail.com`
        }, 
        {
            id: 2,
            icon: <TbBrandLinkedin className='contact__option-icon' />,
            title: `LinkedIn`,
            text: `Romeo Mutonga`,
            socialMediaPlatform: `https://www.linkedin.com/in/romeo-mutonga-31a5761ba/`
        }
    ];

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pwvimxl', 'template_830gv3p', form.current, 'zbPQQCWghLI5VIPvO')

        .then(
            (result) => {
                console.log("Email sent successfully: ", result.text);
                alert("Message sent successfully!");
            }, 
            (error) => {
                console.log("Error sending e-mail: ", error.text);
                alert("Failed to send message");
            }
        );

        e.target.reset() // Reset form fields after submission
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    {/*
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>romeomutonga3@gmail.com</h5>
                        <a href={} target="blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Romeo Mutonga</h5>
                        <a href={} target="blank">Send a message</a>
                    </article>
                    */}

                    {
                        data.map(({id, icon, title, text, socialMediaPlatform}) => {
                            return (
                                <article key={id} className='contact__option'>
                                    {icon}
                                    <h4>{title}</h4>
                                    <h5>{text}</h5>
                                    <a href={socialMediaPlatform} target="blank" rel="noopener noreferrer">Send Message</a>
                                </article>
                            )
                        })
                    }
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' placeholder='Enter your name...' required />
                    <input type="email" name='user_email' placeholder='Email...' required />
                    <textarea name='message' rows="7" placeholder='Send a message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact