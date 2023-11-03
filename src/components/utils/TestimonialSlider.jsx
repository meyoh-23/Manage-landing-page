import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";

import {testimonials} from './../../assets/data';
import TestimonialCard from './TestimonialCard';

export const TestimonialsSlider =() => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true
        }
        },
        {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
        }
        }
    ]
    };

    return (
        <Slider {...settings}>
            {
                testimonials.map((item) => {
                    const {id, comments, name, image} = item;
                    return (
                        <TestimonialCard
                        key={id}
                        name={name}
                        image={image}
                        comments={comments}
                />
                    )
                })
            }
    </Slider>
    )
}