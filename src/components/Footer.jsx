import { Box, Link, TextField, Typography } from "@mui/material"
import { MinorButton } from "./utils/Buttons"
import { useState } from "react"
import { footerItem1, footerItem2, socialIcons } from './../assets/data';
import logo from './../assets/images/logo.svg';

function Footer() {
    const [errorMessage, setErrorMessage] = useState(false);
    const [email, setEmail] = useState('');
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const handleSubmit =(e) => {
        e.preventDefault();
        setErrorMessage(false);
        setEmail('');

        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email) {
            setErrorMessage(true);
        }
        const validEmail = pattern.test(email);
        if ( validEmail) {
            setErrorMessage(false);
        } else {
            setErrorMessage( true);
        }
    }

  return (
    <Box sx={{
        py: 4,
        backgroundColor: "primary.main",
    }}>
        <Box sx={{
            display: {
                xs: "flex",
                md: "none"
            },
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
        }}>
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "flex-start",
                width: "90vw"
            }}
            >
                <form noValidate autoComplete="off" onClick={ handleSubmit}>
                    <TextField
                    placeholder="Updates in your inbox..."
                    onChange={(e) => setEmail(e.target.value)}
                    error={errorMessage}
                    helperText= {errorMessage ? 'Please enter a valued email' : " "}
                    sx={{
                        borderRadius: 8,
                        backgroundColor: "#fff",
                        height: "2.75rem"
                    }}
                    />
                </form>
                <MinorButton
                indexInfo='GO'
                bgColor='secondary.main'
                size='large'
                type='submit'
                />
            </Box>
            <Box
            sx={{
                width: "90vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
            }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                }}>
                    {
                        footerItem1.map((item) => {
                            const {id, label} = item;
                            return <Link
                            key={id}
                            underline="none"
                            href={`#${label}`}
                            sx={{
                                color:"neutral.main",
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                fontWeight: "400",
                                fontSize: "1rem",
                                whiteSpace: "nowrap"
                            }}
                            >
                            {label}
                            </Link>
                        })
                    }
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                }}>
                    {
                        footerItem2.map((item) => {
                            const {id, label} = item;
                            return <Link
                            key={id}
                            underline="none"
                            href={`#${label}`}
                            sx={{
                                color:"neutral.main",
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                fontWeight: "400",
                                fontSize: "1rem",
                                whiteSpace: "nowrap"
                            }}
                            >
                            {label}
                            </Link>
                        })
                    }
                </Box>
            </Box>
            <Box
            sx={{
                width: "90vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
            }}
            >
                {
                    socialIcons.map((item) => {
                        const {id, icon, url, name } = item;
                        return (
                            <span key={id}>
                                <Link 
                                href={url}
                                >
                                <img src={icon} alt={name} />
                                </Link>
                            </span>
                        )
                    })
                }
            </Box>
            <img src={logo} alt="logo" />
            <Typography 
            variant="p"
            sx={{
                color: "neutral.main",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "1rem",
            }}>
                Copyright {year}. All rights reserved.
            </Typography>
        </Box>
        <Box sx={{
            display: {
                xs: "none",
                md: "flex"
            }
        }}>
            <Typography>span desltop footer container</Typography>
        </Box>
    </Box>
  )
}

export default Footer;