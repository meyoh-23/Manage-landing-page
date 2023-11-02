import { Box, Typography } from "@mui/material";
import { MainButton } from "./utils/Buttons";

function CallToAction() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row",
      },
      justifyContent: "space-between",
      alignItems: {
        xs: "center",
        md: "flex-start",
      },
      backgroundColor: "secondary.main",
      py: 3,
    }}>
        <Typography
        variant="h4"
        sx={{
          color: "#fff",
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontWeight: "700",
          textAlign: {
            xs: "center",
            md: "left"
          },
          my: {
            xs: 2,
          },
          maxWidth: "500px"
        }}
        >
          Simplify how your team works today.
        </Typography>
        
        <MainButton
        text='get started'
        mainColor='#fff'
        textColor='secondary.main'
        activeColor='secondary.light'
        />
    </Box>
  )
}

export default CallToAction;