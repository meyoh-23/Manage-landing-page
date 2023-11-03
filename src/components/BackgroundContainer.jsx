import { Box } from '@mui/material'
import React from 'react';
import bgPattern from './../assets/images/bg-tablet-pattern.svg';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

function BackgroundContainer() {
  return (
    <Box
    sx={{
      overflow: "hidden",
        height: "150%",
        position: "relative",
        width: "100vw",
    }}
    >
        <Box
        sx={{
          overflow: "hidden",
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: "no-repeat",
            zIndex: "-1",
            position: "absolute",
            top: "-10%",
            right: '-20%',
            width: "90%",
            height: "50%",
            backgroundPosition: "top center",
        }}
        ></Box>
        <Box
        sx={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: "no-repeat",
            zIndex: "-1",
            top: "100%",
            left: 0,
        }}
        ></Box>
        <Navbar/>
        <Hero/>
        <Services/>
        <Testimonials/>
        <CallToAction/>
        <Footer/>
    </Box>
  )
}

export default BackgroundContainer;