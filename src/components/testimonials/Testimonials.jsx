import React from 'react';
import './testimonials.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVT1,
        name: 'Mary Watiri',
        review: `As his co-worker, I was pleased to work with such an industrious individual. Showed prowess, zeal and passion in the 
        developing software solutions - while constantly initiating a strong determination to grow in this career, both
        from a personal and community perspective.`,
    },
    {
        avatar: AVT2,
        name: 'Alex Maragia',
        review: `Showed extra due diligence in his work. Good in communication skills and team-collaboration. 
        Very proud.`,
    },
    {
        avatar: AVT3,
        name: 'Kirinyet Brian',
        review: `Was pleased to work with one of the most brilliant minds in the Software Development industry, very committed
        and down to earth to solving problems that came his way. His technical skills were well beyond my expectations,
        I would highly recommend him to anyone.`,
    },

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt='#' />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials