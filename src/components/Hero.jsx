import { Box, Grid, Typography, } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import heroIllustration from './../assets/images/illustration-intro.svg';
import { MainButton } from './utils/Buttons';


function Hero() {

    return (
    <Box variant='header'>
        <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
        }}
        >
            <Box
            sx={{
                mt: {
                    xs: 15,
                    md: 20,
                },
            }}
            >
                <Box sx={{
                display: {
                    xs: "none",
                    md: "flex"
                },
            }}>
                <Grid container spacing={0}>
                    <Grid item md={6}>
                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'space-between',
                            alignItems: "flex-start",
                            gap: 2.5,
                            mt: 3,
                        }}
                        >
                            <Typography
                            variant='h4'
                            sx={{
                                color: "primary.main",
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                fontWeight: "700",
                            }}
                            >
                                Bring everyone together to build better products
                            </Typography>
                            <Typography
                            variant='p'
                            sx={{
                                color: "primary.main",
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                fontWeight: "400",
                                fontSize: "1rem",
                            }}
                            >
                                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                            </Typography>
                            <MainButton
                            text='get started'
                            mainColor='secondary.main'
                            textColor='#fff'
                            activeColor='secondary.main'
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                            <Box>
                                <img src={heroIllustration} alt="heroIllustration" style={{maxWidth: "100%", height: 'auto'}} />
                            </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                display: {
                    xs: "flex",
                    md: "none"
                },
                flexDirection: 'column',
                justifyContent: "space-between",
                alignItems: "center",
                gap: 4,
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 3,
                    alignItems: "center",
                }}>
                    <Box>
                        <img src={heroIllustration} alt="heroIllustration" style={{maxWidth: "100%", height: 'auto'}} />
                    </Box>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        alignItems: "center",
                        justifyContent: 'space-between',
                    }}
                    >
                        <Typography 
                        sx={{
                            color: "primary.main",
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                            fontWeight: "700",
                            textAlign: "center",
                        }}
                        >
                            Bring everyone together to build better products
                        </Typography>
                        <Typography
                            variant='p'
                            sx={{
                                color: "primary.main",
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                fontWeight: "400",
                                fontSize: "1rem",
                                textAlign: "center",
                            }}
                            >
                                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                            </Typography>
                            <MainButton
                            text='get started'
                            mainColor='secondary.main'
                            textColor='#fff'
                            activeColor='secondary.main'
                            />
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
    </Box>
)}

export default Hero;