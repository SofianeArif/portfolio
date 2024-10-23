import React, {useState} from "react";
import {
    Box,
    Card,
    Grid2 as Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import {ArrowBackRounded} from "@mui/icons-material";
import {EToolType, ProjectType, StackType} from "../../types/Project";

import ReactSVG from "../../static/images/about-me/react.svg";
import TypescriptSVG from "../../static/images/about-me/typescript.svg";
import MaterialUISVG from "../../static/images/libraries/materialui.svg";
import NodeJsSVG from "../../static/images/about-me/nodejs.svg";
import PgsqlSVG from "../../static/images/about-me/postgresql.svg";
import PhpSVG from "../../static/images/languages/php.svg";
import LaravelSVG from "../../static/images/frameworks/laravel.svg";
import JavaScriptSVG from "../../static/images/about-me/javascript.svg";
import MongoDBSVG from "../../static/images/frameworks/mongo.svg";
import HTMLSVG from "../../static/images/languages/html.svg";
import CSSSVG from "../../static/images/languages/css.svg";

import FreeAdsHome from "../../static/screens/freeads/home.png";
import TWAHome from "../../static/screens/tweetacademie/home.png";
import TWALogin from "../../static/screens/tweetacademie/login.png";
import TWAProfile from "../../static/screens/tweetacademie/profile.png";
import P4Home from "../../static/screens/p4/home.png";
import P4Color from "../../static/screens/p4/color.png";
import WYSIWYGHome from "../../static/screens/wysiwyg/home.png";

const {react, javascript, typescript, materialUi, nodeJs, postgresSql, mongoDb, php, laravel, html, css} = {
    react: {
        name: 'React',
        logo: ReactSVG,
        type: EToolType.FRAMEWORK
    }, javascript: {
        name: 'JavaScript',
        logo: JavaScriptSVG,
        type: EToolType.LANGUAGE
    }, typescript: {
        name: 'TypeScript',
        logo: TypescriptSVG,
        type: EToolType.LANGUAGE
    }, materialUi: {
        name: 'MaterialUI',
        logo: MaterialUISVG,
        type: EToolType.LIBRARY
    }, nodeJs: {
        name: 'NodeJS',
        logo: NodeJsSVG,
        type: EToolType.FRAMEWORK
    }, postgresSql: {
        name: 'PostgresSQL',
        logo: PgsqlSVG,
        type: EToolType.DATABASE
    }, php: {
        name: 'PHP',
        logo: PhpSVG,
        type: EToolType.LANGUAGE
    }, laravel: {
        name: 'Laravel',
        logo: LaravelSVG,
        type: EToolType.FRAMEWORK
    }, mongoDb: {
        name: 'MongoDB',
        logo: MongoDBSVG,
        type: EToolType.DATABASE
    }, html: {
        name: 'HTML',
        logo: HTMLSVG,
        type: EToolType.LANGUAGE
    }, css: {
        name: 'CSS',
        logo: CSSSVG,
        type: EToolType.LANGUAGE
    }

}

const projectData: ProjectType[] = [
    {
        name: "Projet libre",
        thumbnail: "https://placehold.co/600x400",
        description: "Dans le cadre de la fin de formation, un projet de groupe a été réalisé. SoloSail est un ERP (Enterprise Resource Management) destiné aux entrepreneurs, faciliant leurs opérations au quotidien et leur offrant une vision globale de la santé de leur entreprise.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [typescript, react, nodeJs, materialUi],
    },
    {
        name: "Portfolio",
        thumbnail: "https://placehold.co/600x400",
        description: "Dans le but de valider les compétences acquises au cours de la formation, ce portfolio a été réalisé en respectant au mieux les normes web actuelles, et utilisant des outils populaires et adaptés aux contraintes présentées.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [react, typescript, nodeJs, materialUi],
    },
    {
        name: "FreeAds",
        thumbnail: FreeAdsHome,
        description: "Le projet FreeAds a eu pour objectif de nous faire découvrir les patrons de conception MVC (Model View Controller) via Laravel, en créant un site d'annonces, type Leboncoin, afin d'être ammené à utiliser toutes les fonctionnalités principales du concept.",
        images: [FreeAdsHome],
        stack: [php, laravel],
    },
    {
        name: "TweetAcadémie",
        thumbnail: TWAHome,
        description: "Le projet TweetAcadémie avait pour but de réaliser un clone de Twitter, en groupe aléatoires, avec comme contrainte un choix de base de données à réaliser en amont, qui sera commune à tous les groupes et non modifiable une fois validée. Cela nous a donc obligés à correctement ancitiper les besoins.",
        images: [TWAProfile, TWAHome, TWALogin],
        stack: [php, ],
    },
    {
        name: "Puissance 4",
        thumbnail: P4Home,
        description: "Le projet Puissance 4.... FLEMME DU RESTE",
        images: [P4Home, P4Color],
        stack: [javascript, html, css]
    },
    {
        name: "WYSIWYG",
        thumbnail: WYSIWYGHome,
        description: "Le projet WYSIWYG (What You See Is What You Get), a été réalisé dans le but de créer un éditeur de texte visuel tel que TinyMCE, en un week-end, appelé \"Rush\" en utilisant le minimum d'outils, il sert à ajouter des couleurs et autres effets de mise en page, d'alignement, etc. Tout ceci en possédant un retour en live du résultat, servant de prévisualisation, c'est de là d'où est tiré le nom What You See Is What You Get.",
        images: [WYSIWYGHome],
        stack: [javascript, html, css]
    },
    {
        name: "My Events",
        thumbnail: "https://placehold.co/600x400",
        description: "My Events a été concu dans le but de choisir une spécialisation, sur ce projet, nous étions en binome, nous avons donc réparti la tâche de manière simple, une personne s'occupant du front (affichage, interaction entre l'utilisateur et le site, design, etc.) et une personne sur le back (logique entre le site et le serveur, intégrité des données, etc.).",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [typescript, react, nodeJs, mongoDb],
    }
];

const ProjectsGallery = () => {
    const [selectedProject, setSelectedProject] = useState<any>();

    const renderGallery = () => (
        <Grid container spacing={2} height="450px" overflow="scroll" maxWidth="lg" sx={{margin: '0 auto'}}>
            {projectData.map((project, index) => (
                <Grid size={{xs: 6, sm: 3, md: 3}} key={index}>
                    <Card
                        onClick={() => setSelectedProject(project)}
                        sx={{
                            position: "relative",
                            cursor: "pointer",
                            boxShadow: "none",
                            ":hover .overlay": {
                                opacity: 0.8,
                            },
                            width: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src={project.thumbnail}
                            alt={project.name}
                            sx={{
                                width: "100%",
                                height: "150px",
                                display: "block",
                            }}
                        />

                        <Box
                            className="overlay"
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                bgcolor: "rgba(0, 0, 0, 0.7)",
                                color: "white",
                                opacity: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "opacity 0.3s ease-in-out",
                            }}
                        >
                            <Typography variant="h6">{project.name}</Typography>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );

    const renderProjectDetails = () => (
        <Box sx={{maxWidth: 'lg', margin: '0 auto'}}>
            <Carousel autoPlay={true} navButtonsAlwaysVisible={true} animation="slide" cycleNavigation={false} sx={{margin: '0 auto', textAlign: 'center', width: '80%'}} height="400px">
                {selectedProject && selectedProject.images.map((image: string, index: number) => (
                    <Box
                        component="img"
                        src={image}
                        alt={selectedProject.name}
                        key={index}
                        sx={{width: '80%', height: 'auto'}}
                    />
                ))}
            </Carousel>

            <Box sx={{my: 5, mx: 'auto', textAlign: 'center'}}>
                <Typography variant="body2" color="black" sx={{mt: 2, maxWidth: '50%', margin: '0 auto'}}>
                    {selectedProject.description}
                </Typography>
                <List sx={{display: 'flex', justifyContent: 'center', gap: '24px', mt: 3}}>
                    {selectedProject.stack && selectedProject.stack.map((stack: StackType, index: number) => (
                        <Paper key={index} elevation={3} sx={{width: 'fit-content', mb: 1}}>
                            <ListItem>
                                <ListItemAvatar sx={{width: '35px'}}>
                                    <img src={stack.logo} alt={stack.name} style={{width: '35px'}}/>
                                </ListItemAvatar>
                                <ListItemText color="primary" primary={stack.name}
                                              secondary={stack.type}/>
                            </ListItem>
                        </Paper>
                    ))}
                </List>
            </Box>
        </Box>
    );

    return (
        <Box id="projects" sx={{p: 3, bgcolor: 'rgb(242, 242, 243)', position: 'relative', py: '50px'}}>
            <Typography variant="h3" textAlign="center" color="black" pb="50px">
                <IconButton
                    color="secondary"
                    size="large"
                    onClick={() => setSelectedProject(null)}
                    sx={{color: 'black', mb: 1, mr: 2, display: `${selectedProject ? 'inline-flex' : 'none'}`}}
                >
                    <ArrowBackRounded fontSize="medium"/>
                </IconButton>
                {selectedProject ? selectedProject.name : "Projets notables"}
            </Typography>
            {selectedProject ? renderProjectDetails() : renderGallery()}
        </Box>
    );
};

export default ProjectsGallery;
