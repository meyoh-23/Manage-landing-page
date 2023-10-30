import { Button } from "@mui/material";

const MainButton = ({text, mainColor, activeColor, textColor}) => {
    return (
    <Button
    variant="cotained"
    size="large"
    sx={{
        color: `${textColor}`,
        borderRadius: 8,
        backgroundColor: `${mainColor}`,
        border: "1px solid secondary.main",
        whiteSpace: "nowrap",
        textTransform: "capitalize",
        px: 2.5,
        fontFamily: "'Be Vietnam Pro', sans-serif",
        fontWeight: "400",
        fontSize: '1rem',
        py: 1,
        "&:hover": {
            backgroundColor: `${activeColor}`
        }
    }}
    >
        {text}
    </Button>
    )
}

export {MainButton};