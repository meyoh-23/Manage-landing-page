import React from 'react'
import { Box, Typography } from '@mui/material';
import { testimonials } from '../assets/data';
import TestimonialCard from './utils/TestimonialCard';

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
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 3,
      }}>
        {
          testimonials.map((item)=> {
            const {name, id, image, comments} = item;
            return <TestimonialCard
            key={id}
            name={name}
            comments={comments}
            image={image}
            />
          })
        }
      </Box>
    </Box>
  )
}

export default Testimonials;