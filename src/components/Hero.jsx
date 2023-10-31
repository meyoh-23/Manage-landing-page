import { Box, Grid, Typography, } from '@mui/material';
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
                zIndex: "-1",
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
              {/*   container 1 */}
            </Box>
            <Box
            sx={{
                position: "absolute",
                backgroundImage: `url(${bgTabletPattern})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgoundposition: "center top",
                zIndex: "-1",
                opacity: "1",
                width: {
                    xs: "300px",
                    md: "100%",
                },
                height: {
                    xs: "300px",
                    sm: "500px",
                    md: "700px",
                },
                transform: {
                    xs: "translate(202px, 530px)",
                    sm: "translate(300px, 570px)",
                    md: "translate(-402px, 1120px)",
                }
            }}
            >
                {/* container 2 */}
            </Box>
            <Box
            sx={{
                mt: {
                    xs: 15,
                    md: 20,
                },
                mx: {
                    xs: 2,
                    md: 10,
                }
            }}
            >
                <Box sx={{
                display: {
                    xs: "none",
                    md: "flex"
                },
            }}>
                <Grid container spacing={4}>
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
                                maxWidth: "300px"
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
                                maxWidth: "300px"
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
                                maxWidth: "300px",
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