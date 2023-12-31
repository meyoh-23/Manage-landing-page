import { Box, Typography } from '@mui/material';
import React from 'react';
import { MinorButton } from './Buttons';

function ServicesCard({bgColor, indexInfo, descriptionInfo, descriptionHeader, size}) {
  return (
    <Box variant='arcticle'
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
        }}
        >
    <Box
    sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        alignItems: "center",
        borderRadius: {
            xs: "5px",
            md: " 0px"
        },
        mt: 2,
        backgroundColor: {
            xs: "secondary.light",
            md: "transparent",
        },
    }}
    >
        <MinorButton
        indexInfo={indexInfo}
        bgColor={bgColor}
        size='small'
        />
        <Typography
            sx={{
                color: "primary.main",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: "700",
                fontSize: "1rem"
            }}
            >
                {descriptionHeader}
        </Typography>
    </Box>
    <Typography 
    variant= 'p'
    sx={{
        ml: 5,
        textAlign: "flex-start",
        color: "primary.light",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontSize: "1rem",
        fontWeight: "400",
    }}>
        {descriptionInfo}
    </Typography>
    </Box>
  )
}

export default ServicesCard;