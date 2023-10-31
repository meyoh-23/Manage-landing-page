import { Box, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import bgTabletPattern from './../assets/images/bg-tablet-pattern.svg';
import heroIllustration from './../assets/images/illustration-intro.svg';
import { MainButton } from './utils/Buttons';


function Hero() {

    return (
    <Box variant='header'>
        <Navbar/>
        <Box
        sx={{
            margin: "auto",
            top: 0,
            left: 0,
            height: "2000px",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
        }}
        >
            <Box
            sx={{
                position: "absolute",
                backgroundImage: `url(${bgTabletPattern})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgoundposition: "center top",
                zIndex: "1",
                width: {
                    xs: "450px",
                    md: "100%",
                },
                height: {
                    xs: "450px",
                    sm: "500px",
                    md: "700px",
                    lg: "800px",
                    xl: "900px",
                },
                transform: {
                    xs: "translate(100px, -130px)",
                    sm: "translate(200px, -130px)",
                    md: "translate(310px, -80px)",
                    lg: "translate(450px, -60px)",
                    xl: "translate(600px, -40px)",
                }
            }}
            >
                container 1
            </Box>
            <Box
            sx={{
                position: "absolute",
                backgroundImage: `url(${bgTabletPattern})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgoundposition: "center top",
                zIndex: "1",
            }}
            >
                container 2
            </Box>
        </Box>
    </Box>
)}

export default Hero;