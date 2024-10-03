import React, {useState} from "react";
import {
    Box,
    Grid2 as Grid,
    Typography,
    Card,
    IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText, Paper
} from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import {ArrowBackIosNew} from "@mui/icons-material";
import {ProjectType, StackType} from "../../types/Project";

import Python from "../../static/images/languages/python.svg";
import Django from "../../static/images/frameworks/django.svg";

const projectData : ProjectType[] = [
    {
        name: "Projet 1",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [{
            name: 'Python',
            logo: Python
        }, {
            name: 'Django',
            logo: Django
        }],
    },
    {
        name: "Projet 2",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        url: "",
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },{
        name: "Projet 1",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [{
            name: 'Python',
            logo: Python
        }, {
            name: 'Django',
            logo: Django
        }],
    },
    {
        name: "Projet 2",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        url: "",
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },{
        name: "Projet 1",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [{
            name: 'Python',
            logo: Python
        }, {
            name: 'Django',
            logo: Django
        }],
    },
    {
        name: "Projet 2",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        url: "",
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },{
        name: "Projet 1",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [{
            name: 'Python',
            logo: Python
        }, {
            name: 'Django',
            logo: Django
        }],
    },
    {
        name: "Projet 2",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        url: "",
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },{
        name: "Projet 1",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [{
            name: 'Python',
            logo: Python
        }, {
            name: 'Django',
            logo: Django
        }],
    },
    {
        name: "Projet 2",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        url: "",
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },{
        name: "Projet 1",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        stack: [{
            name: 'Python',
            logo: Python
        }, {
            name: 'Django',
            logo: Django
        }],
    },
    {
        name: "Projet 2",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
        url: "",
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
        name: "Projet 3",
        thumbnail: "https://placehold.co/600x400",
        description: "Description du projet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },

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

                        }}
                    >
                        <Box
                            component="img"
                            src={project.thumbnail}
                            alt={project.name}
                            sx={{
                                width: "100%",
                                height: "auto",
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
            <Carousel autoPlay={true} navButtonsAlwaysVisible={true} animation="slide" cycleNavigation={false}
                      sx={{width: {xs: '100%', lg: '50%'}, margin: '0 auto', textAlign: 'center'}}>
                {selectedProject && selectedProject.images.map((image : string, index : number) => (
                    <Box
                        component="img"
                        src={image}
                        alt={selectedProject.name}
                        key={index}
                    />
                ))}
            </Carousel>

            <Box sx={{my: 5, mx: 'auto', textAlign: 'center'}}>
                <Typography variant="body1" color="black" sx={{mt: 2}}>
                    {selectedProject.description}
                </Typography>
                <List sx={{display: 'flex', justifyContent: 'center', gap: '24px', mt: 3}}>
                    {selectedProject.stack && selectedProject.stack.map((stack : StackType) => (
                        <Paper elevation={3} sx={{width: 'fit-content', mb: 1}}>
                            <ListItem>
                                <ListItemAvatar>
                                        <img src={stack.logo} alt={stack.name} style={{width: '80%'}}/>
                                </ListItemAvatar>
                                <ListItemText color="primary" primary={stack.name}
                                              secondary="Langage de programmation"/>
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
                    <ArrowBackIosNew/>
                </IconButton>
                {selectedProject ? selectedProject.name : "Projets notables"}
            </Typography>
            {selectedProject ? renderProjectDetails() : renderGallery()}
        </Box>
    );
};

export default ProjectsGallery;
