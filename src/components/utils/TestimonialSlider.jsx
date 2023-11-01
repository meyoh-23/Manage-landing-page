import React, { Component } from "react";
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
        slidesToScroll: 1
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