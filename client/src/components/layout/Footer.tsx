import React from "react";
import {Box, Grid2 as Grid, Typography} from "@mui/material";
import Github from "../../static/images/hero-banner/github.svg";
import Linkedin from "../../static/images/hero-banner/linkedin.svg";

function Footer() {

    return (
        <footer className="footer">
            <Grid container maxWidth="lg" sx={{height: {xs: '100px', md: '200px'}, alignItems: 'center'}}>
                <Grid size={8} sx={{textAlign: 'center', alignContent: 'end', justifyContent: 'center'}}>
                    <Box display="inline-flex" sx={{textAlign: 'center', alignContent: 'center', justifyContent: 'center'}}>
                        <Typography>Projet réalisé dans le cadre de la formation</Typography>
                        <a href="https://www.webacademie.org/" target="_blank" rel="noreferrer">
                            <img alt="Logo Webacademie by Epitech" src="./webacademie.png"
                                 style={{width: '180px', marginTop: '-5px', marginLeft: '15px'}}/>
                        </a>
                    </Box>
                </Grid>
                <Grid size={4}>
                    <a href="https://github.fr/SofianeArif" target="_blank">
                        <img src={Github} alt="Lien vers le Github de Sofiane Arif" style={{width: '24px', marginRight: '12px'}}/>
                    </a>
                    <a href="https://linkedin.fr/in/sofiane-arif" target="_blank">
                        <img src={Linkedin} alt="Lien vers le Linkedin de Sofiane Arif" style={{width: '24px'}}/>
                    </a>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
