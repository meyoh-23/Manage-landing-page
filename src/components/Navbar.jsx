import { AppBar, Box, Button, Drawer, Link, Toolbar } from '@mui/material';
import React from 'react';
import {navItems} from './../assets/data';
import logo from './../assets/images/logo.svg';
import { MainButton } from './utils/Buttons';

const Navbar = () => {
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
                        fontWeight: "400", 
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
        mobile menu
        </Box>
        <Drawer
        role='menu'
        
        >
            mobile menu items
        </Drawer>
        </Toolbar>
    </AppBar>
)
}

export default Navbar;
