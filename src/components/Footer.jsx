import { Box, Link, Typography } from "@mui/material"
import { footerItem1, footerItem2, socialIcons } from './../assets/data';
import logo from './../assets/images/logo-white.svg';
import ContactForm from "./utils/ContactForm";

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

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
            px: {
                xs: 2.25,
                md: 4.25,
                lg: 10
            }
        }}>
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "flex-start",
                width: "90%"
            }}
            >
                <ContactForm/>
            </Box>
            <Box
            sx={{
                width: "90%",
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
                width: "90%",
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
                textAlign: "center",
            }}>
                Copyright {year}. All rights reserved.
            </Typography>
        </Box>
        <Box sx={{
            display: {
                xs: "none",
                md: "flex"
            },
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "90%"
        }}>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 10,
            }}
            >
                <img src={logo} alt="logo" />
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 3
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
            </Box>
            <Box 
            sx={{
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
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 10,
            }}>
                <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "flex-start",
                gap: 4,
            }}
            >
                <ContactForm/>
            </Box>
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
        </Box>
    </Box>
  )
}

export default Footer;