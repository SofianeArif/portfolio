import React from "react";
import {Box, Typography, Grid2 as Grid, Icon} from "@mui/material";
import Scrolldown from '../../static/images/hero-banner/scroll-down.gif';
import Selfie from '../../static/images/hero-banner/selfie.jpg';
import HeroWaveDivider from "./HeroWaveDivider";
import ShootingStar from "./ShootingStar";
import GitHub from '../../static/images/hero-banner/github.svg';
import LinkedIn from '../../static/images/hero-banner/linkedin.svg';
import CV from '../../static/images/hero-banner/cv.svg';

export type HeroBannerPresentation = {
    title: string;
    description: string;
    subDescription: string;
    picture: {
        src: string;
        alt: string;
    };
}

const heroBannerPresentation: HeroBannerPresentation = {
    title: "Sofiane Arif",
    description: "Développeur web et web mobile",
    subDescription: "Spécialisé en JavaScript",
    picture: {
        src: Selfie,
        alt: "Sofiane Arif's profile picture"
    }
}

function HeroBanner() {
    return (
        <Box id="hero" sx={containerStyle}>
            <Grid
                container
                spacing={24}
                sx={{ height: '80%', margin: '0 auto' }}
                maxWidth="lg"
                alignItems="center"
                justifyContent="center"
            >
                <Grid
                    container
                    spacing={0}
                    size={{ xs: 12, md: 6 }}
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                >
                    <Grid container direction="column" alignItems="center">
                        <Grid marginBottom="15px" size={12}>
                            <Typography variant="h2" color="white" align="center">
                                {heroBannerPresentation.title}
                            </Typography>
                        </Grid>
                        <Grid marginBottom="15px" size={12}>
                            <Typography variant="h5" color="gray" align="center">
                                {heroBannerPresentation.description}
                            </Typography>
                            <Typography variant="h5" color="gray" align="center">
                                {heroBannerPresentation.subDescription}
                            </Typography>
                        </Grid>

                        <Grid size={12} sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 3 }}>
                            <Box
                                component="a"
                                href="https://github.com/SofianeArif"
                                sx={iconStyle}
                            >
                                <img src={GitHub} alt="GitHub" style={{ width: 40, height: 40 }} />
                            </Box>

                            <Box
                                component="a"
                                href="https://linkedin.com/in/sofiane-arif"
                                sx={iconStyle}
                            >
                                <img src={LinkedIn} alt="LinkedIn" style={{ width: 40, height: 40 }} />
                            </Box>

                            <Box
                                component="a"
                                href="/cv.pdf"
                                sx={iconStyle}
                            >
                                <img src={CV} alt="CV" style={{ width: 40, height: 40 }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container size={{ xs: 12, md: 6 }} sx={pictureStyle} textAlign="center" my="auto">
                    <img src={heroBannerPresentation.picture.src} alt={heroBannerPresentation.picture.alt} style={{borderRadius: '50%', width: '50%'}} />
                </Grid>
            </Grid>

            <ShootingStar />

            <Box sx={scrollDownStyle}>
                <img src={Scrolldown} alt="Scroll down" style={{ height: '50px' }} />
            </Box>
            <HeroWaveDivider />
        </Box>
    );
}

// Styles
const containerStyle = {
    backgroundColor: 'background.paper',
    minHeight: '650px',
    height: { lg: '100vh' },
    position: 'relative',
    overflow: 'hidden',
    paddingTop: { lg: '100px', xs: '150px' },
};

const pictureStyle = { display: { xs: 'none', lg: 'block' } };

const scrollDownStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '20%',
    width: '100%',
};

const iconStyle = {
    display: 'inline-block',
    color: 'white',
    transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.2)',
        filter: 'brightness(1.5)',
    },
};

export default HeroBanner;
