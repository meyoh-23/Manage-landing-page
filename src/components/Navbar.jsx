import { AppBar, Box, Button, Drawer, Link, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import {navItems} from './../assets/data';
import logo from './../assets/images/logo.svg';
import { MainButton } from './utils/Buttons';
import { FaBars, FaXbox} from "react-icons/fa";

const Navbar = () => {
    const [mobileMenu, setMobileMEnu] = useState(false);

    return (
    <AppBar
    elevation={0}
    sx={{
        px: {
            sm: 1,
            md:3.5,
        },
        py: 4,
        background: "transparent",
    }}
    >
        <Toolbar
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        <Button
        variant='text'
        sx={{
            '&:hover': {
                backgroundColor: "transparent",
                border: "none",
            }
        }}
        >
            <img src={logo} alt="manage" />
        </Button>
        <Box
        sx={{
            display: {
                xs: "none",
                md: "flex",
            },
            justifyContent: "space-between",
            gap: 1.5,
        }}
        >
            {
            navItems.map((link) => {
                const {id, item} = link;
                return (
                    <Link
                    underline='none'
                    key={id} 
                    href={`#${item}`} 
                    sx={{
                        color: "primary.main",
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: "500", 
                        fontSize: "1rem",
                        textTransform: 'capitalize',
                        "&:hover": {
                            color: "primary.light"
                        }
                    }}
                    >
                        {item}
                    </Link>
                )
            })
            }
        </Box>
        <Box 
        sx={{
            display: {
                xs: "none",
                md: "flex",
                color: "red",
            }
        }}
        >
            <MainButton
            text='get started'
            mainColor='secondary.main'
            textColor='#fff'
            activeColor='secondary.light'
            />
        </Box>
        <Box 
        sx={{
            display: {
                xs: "flex",
                md: "none",
                color: "red",
            }
        }}
        >
        <Button
        size='large'
        variant='text'
        onClick={() => setMobileMEnu(!mobileMenu)}
        >
            {
                mobileMenu? <FaXbox/> : <FaBars/>
            }
        </Button>
        </Box>
        <Drawer
        anchor='top'
        open={mobileMenu}
        onClick={() => setMobileMEnu(!mobileMenu)}
        PaperProps={{
            sx: {
                width: "90vw",
                mx: "auto",
                mt: 12,
                borderRadius: "10px",
                display: {
                    xs: "flex",
                    md: "none",
                }
            }
        }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fff",
                justifyContent: "space-between",
                gap: 3.25,
                py: 4,
            }}>
                {
                    navItems.map((link) => {
                    const {id, item} = link;
                    return (
                        <Link
                        underline='none'
                        key={id} 
                        href={`#${item}`} 
                        sx={{
                            color: "primary.main",
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                            fontWeight: "500", 
                            fontSize: "1rem",
                            textTransform: 'capitalize',
                            "&:hover": {
                                color: "primary.light"
                            }
                        }}
                        >
                            {item}
                        </Link>
                    )
                })
                }
            </Box>
        </Drawer>
    </Toolbar>
</AppBar>
)
}

export default Navbar;
