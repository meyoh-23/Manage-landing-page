import React from 'react'
import { Box, Typography } from '@mui/material';
import { TestimonialsSlider } from './utils/TestimonialSlider';


function Testimonials() {
  return (
    <Box
    sx={{
      mt: 8,
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "space-between",
      gap: 6,
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
      <Box>
        <TestimonialsSlider/>
      </Box>
    </Box>
  )
}

export default Testimonials;