import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../assets/data";
import { Box } from "@mui/material";

export default class Responsive extends Component {
render() {
    var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    };

        return (
    <Box>
        <Slider {...settings}>
        
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
        }}>
            {
                testimonials.map((item) => {
                    const {image, id, comments, name} = item;
                    return <TestimonialCard
                    key={id}
                    name={name}
                    image={image}
                    comments={comments}
                    />
                })
            }
        </Box>
        </Slider>
    </Box>
    );
}
}