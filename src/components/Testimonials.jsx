import React from 'react'
import { Box, Typography } from '@mui/material';
import { TestimonialsSlider } from './utils/TestimonialSlider';
import { MainButton } from './utils/Buttons';


function Testimonials() {
  return (
    <Box
    sx={{
      mt: 8,
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "space-between",
      gap: 3.5,
      mb: 2.5,
      mx: {
            xs: 2.25,
            md: 4.25,
            lg: 7.5
        }
    }}
    >
      <Typography variant='h4'
      sx={{
        color: "primary.main",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontWeight: "700",
        textAlign: "center",
      }}
      >
        What they’ve said
      </Typography>
      <TestimonialsSlider/>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        mx: "auto",
        mt: 0,
      }}>
        <MainButton
        text='get started'
        mainColor='secondary.main'
        textColor='#fff'
        activeColor='secondary.light'
        />
      </Box>
    </Box>
  )
}

export default Testimonials;