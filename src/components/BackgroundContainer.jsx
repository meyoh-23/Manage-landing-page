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
      /* height: "2000px", */
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      margin: "0 auto",
      justifyContent: "center"
    }}
    >
        <Box
        sx={{
          position: "absolute",
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contained",
          backgroundPosition: "center top",
          zIndex: "-1",
          width: {
            xs: "450px",
            md: "100%",
          },
          height: {
            xs: "450px",
            md: "700px",
          },
          transform: {
            xs: "translate(100px, -100px)",
            md: "translate(410px, -80px)",
          }
        }}
        ></Box>
        <Box
        sx={{
            position: "absolute",
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contained",
          backgroundPosition: "center top",
          zIndex: "-1",
          opacity: "1",
          width: {
            xs: "300px",
            md: "100%",
          },
          height: {
            xs: "300px",
            md: "700px",
          },
          transform: {
            xs: "translate(202px, 530px)",
            md: "translate(-810px, 1125px)",
          }
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