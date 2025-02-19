import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio-photo.png';
import IMG2 from '../../assets/portfolio-photo(2).png';
import IMG3 from '../../assets/portfolio-photo(3).png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Utilized React to develop an expense tracker system, to keep track of expense against a specified budget - hosted on Github.',
        github: 'https://github.com/jezreel-x',
        demo: 'https://expense-ui.netlify.app/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'My Personal Portfolio Website uses React and is deployed on Netlify.',
        github: 'https://github.com/jezreel-x',
        demo: 'https://mutosh-software.netlify.app/',
    },
    {
        id: 3,
        image: IMG3,
        title: `Qwarqo web application - a website that allows users to seek for rentals at the comfort of their 
        homes. Releases one from the shackles of endless movement in search of a rental. Try it today!!`,
        github: '#',
        demo: 'https://qwarqo.com',
    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio