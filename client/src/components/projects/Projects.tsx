import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {useState} from 'react';

export type IProject = {
    title: string;
    description: string;
    skills: string[];
    images: string[];
}

function Projects() {
    const initialProjects: IProject[] = [
        {
            title: "Projet 1",
            description: "desc",
            skills: ["skill1", "skill2"],
            images: ["https://placehold.co/600x400"]
        },
        {
            title: "Projet 2",
            description: "desc2",
            skills: ["skill1", "skill2"],
            images: ["https://placehold.co/600x400"]
        },
        {
            title: "Projet 3",
            description: "desc2",
            skills: ["skill1", "skill2"],
            images: ["https://placehold.co/600x400"]
        },
    ];

    const [projects, setProjects] = useState<IProject[]>(initialProjects);

    return (
        <Box id="projects" sx={{
            backgroundColor: "#FFFFFF",
            minHeight: "500px",
        }}>
            <Grid container spacing={2} columns={16} justifyContent="center" alignItems="center" minHeight={500}>
                <Grid item lg={16}>
                    <Typography variant="h3" align="center" color="black">Projets
                        notables</Typography>
                </Grid>
                <Grid item lg={16}>
                    <Typography variant="h5" align="center" color="black" marginBottom="10px">Projet 1</Typography>
                </Grid>
                <Grid container>
                    <Grid item lg={6}>
                        <Carousel
                            navButtonsAlwaysVisible
                            autoPlay={false}
                        >
                            {projects.map((project, index) => (
                                <Card key={index} sx={{maxHeight: 200}}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.images[index]}
                                        alt={project.skills[index]}
                                    />
                                </Card>
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid item lg={6} textAlign="center">
                        {projects.map((project, index) => (
                            <Box key={index} sx={{marginBottom: 4}}>
                                <Typography variant="h5" color="black">
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" color="black">
                                    {project.description}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Projects;
