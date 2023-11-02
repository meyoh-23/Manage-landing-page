import { Avatar, Box, Typography } from '@mui/material';

function TestimonialCard({name, image, comments}) {
  return (
    <Box variant='article'
    sx={{
        position: "relative",
        maxWidth: {
            xs:"90vw",
            md: "450px",
        },
        alignItems: "center",
        borderRadius: "20px",
        backgroundColor: "neutral.main",
        mx: 1,
        my: 3,
    }}
    >
        <Box 
        sx={{
            position: "absolute",
            top: 0,
            left: "42.5%",
            transform: "translate(40%, -50%)"
        }}
        >
            <Avatar src={image}/>
        </Box>
        <Box 
        px={5}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        > 
            <Typography
            variant='h5'
            sx={{
                textAlign:"center",
                my: 2,
                pt: 4,
                fontFamily: "'Be Vietnam Pro', sans-serif",
                color: "primary.main",
                fontWeight: "700",
            }}
            >
                {name}
            </Typography>
            <Typography
            variant='p'
            sx={{
                py: 2.25,
                fontFamily: "'Be Vietnam Pro', sans-serif",
                mx: "auto",
                textAlign: "center",
                justifyContent: "center",
                pb: 4,
            }}
            >
                {comments}
            </Typography>
        </Box>
    </Box>
  )
}

export default TestimonialCard;