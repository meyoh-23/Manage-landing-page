import { Box, Typography } from '@mui/material';
import { description } from '../assets/data';
import ServicesCard from './utils/ServicesCard';

function Services() {
  return (
    <Box
    variant='section'
    sx={{
        display: "flex",
        flexDirection: {
            xs: "column",
            md: "row",
        },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: {
            xs: 3,
            md: 5,
        },
        mt: {
            xs: 10,
            md: 15,
        },
        mx: {
                xs: 2.25,
                md: 4.25,
                lg: 7.5
            }
    }}
    >
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: {
                xs: "center",
                md: "flex-start"
            },
            gap: 2,
        }}>
            <Typography
            variant='h4'
            sx={{
                textAlign: {
                    xs: "center",
                    md: "left",
                },
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: "700",
            }}
            >
                What’s different about Manage?
            </Typography>
            <Typography
            variant='p'
            sx={{
                textAlign: {
                    xs: "center",
                    md: "left",
                },
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontWeight: "400",
                color: "primary.light",

            }}
            >
                Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams. 
            </Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: {
                xs: "center",
                md: "flex-start"
            },
        }}>
            {
                description.map((item) => {
                    const {id, info, number, heading} = item;
                    return <ServicesCard
                    key={id}
                    bgColor="secondary.main"
                    indexInfo={number}
                    descriptionInfo={info}
                    descriptionHeader={heading}
                    />
                })
            }
        </Box>
    </Box>
  )
}

export default Services;