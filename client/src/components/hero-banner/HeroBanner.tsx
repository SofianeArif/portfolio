import React from "react";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Scrolldown from '../../static/images/hero-banner/scroll-down.gif';
import Selfie from '../../static/images/hero-banner/image 1.png';
import HeroWaveDivider from "./HeroWaveDivider";
import ShootingStar from "./ShootingStar";

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
            <Grid container spacing={1} columns={16} alignItems="center">
                <Grid item xs={16} lg={10}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" columns={16}>
                        <Grid item marginBottom="15px">
                            <Typography variant="h2" align="center"
                                        color="white">{heroBannerPresentation.title}</Typography>
                        </Grid>
                        <Grid item marginBottom="15px">
                            <Typography variant="h5" align="center"
                                        color="gray">{heroBannerPresentation.description}</Typography>
                            <Typography variant="h5" align="center"
                                        color="gray">{heroBannerPresentation.subDescription}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={pictureStyle} lg={6}>
                    <img src={heroBannerPresentation.picture.src} alt={heroBannerPresentation.picture.alt}/>
                </Grid>
            </Grid>

            <ShootingStar/>

            <Box sx={scrollDownStyle}>
                <img src={Scrolldown} alt="Scroll down" style={{height: '50px'}}/>
            </Box>
            <HeroWaveDivider/>
        </Box>
    );
}

// Styles
const containerStyle = {
    backgroundColor: '#121212',
    minHeight: '650px',
    height: {lg: '100vh'},
    position: 'relative',
    overflow: 'hidden',
    paddingTop: {lg: '100px', xs: '150px'}
};

const pictureStyle = {display: {xs: 'none', lg: 'block'}};

const scrollDownStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '20%',
    width: '100%'
}

export default HeroBanner;
