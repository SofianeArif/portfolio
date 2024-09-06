import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {List, ListItem} from "@mui/material";
import Grid from "@mui/material/Grid";
import TypescriptSVG from "../../static/images/about-me/typescript.svg";
import AngularSVG from "../../static/images/about-me/angular.svg";
import ReactSVG from "../../static/images/about-me/react.svg";
import PostgresSQLSVG from "../../static/images/about-me/postgresql.svg";
import AureliaSVG from "../../static/images/about-me/aurelia.svg";
import JavaScriptSVG from "../../static/images/about-me/javascript.svg";
import NodeSVG from "../../static/images/about-me/nodejs.svg";
import DockerSVG from "../../static/images/about-me/docker.svg";
import AboutWaveDivider from "./AboutWaveDivider";

export type IKeySkill = {
    src: string,
    title: string,
    description: string
}

export type Skills = {
    right: IKeySkill[],
    left: IKeySkill[]
}
export default function About() {

    const skills = {
        left: [
            {
                src: ReactSVG,
                title: 'React',
                description: 'React framework logo'
            },
            {
                src: AureliaSVG,
                title: 'Aurelia',
                description: 'Aurelia framework logo'
            },
            {
                src: AngularSVG,
                title: 'Angular',
                description: 'Angular framework logo'
            },
            {
                src: NodeSVG,
                title: 'NodeJS',
                description: 'NodeJS framework logo'
            }
        ],
        right: [
            {
                src: JavaScriptSVG,
                title: 'JavaScript',
                description: 'JavaScript programming language logo'
            },
            {
                src: TypescriptSVG,
                title: 'TypeScript',
                description: 'TypeScript programming language logo'
            },
            {
                src: PostgresSQLSVG,
                title: 'PostgresSQL',
                description: 'PostgresSQL opensource database logo'
            },
            {
                src: DockerSVG,
                title: 'Docker',
                description: 'Docker deployment software logo'
            }
        ]
    };

    const aboutMeDescription = [
        {
            description: "Passionné de l'informatique depuis mon plus jeune âge, j'ai décidé d'intégrer la formation Web@cadémie by Epitech afin de parfaire mes compétences dans ce domaine, me permettant, à terme, d'être polyvalent et d'avoir la capacité d'aborder un nouveau langage."
        },
        {
            description: "Comme j'ai pu en avoir l'occasion avec la découverte du framework Aurelia et de l'apprentissage de Typescript."
        }
    ];

    return (
        <Box id="about" sx={{
            backgroundColor: "#FFFFFF",
            minHeight: "500px",
        }}>
            <Typography variant="h3" align="center" color="black" sx={{paddingTop: '50px'}}>À propos de moi</Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: {lg: '50px', xs: '25px'}
            }}>
                <Grid container spacing={1} columns={12} justifyContent="center" alignItems="center"
                      sx={{paddingBottom: '50px'}}>
                    <Grid item lg={7}>
                        <Grid container direction="column" justifyContent="center" alignItems="center">
                            <Grid item lg={1}>
                                <Typography variant="h5" align="center" color="black">Compétences clés</Typography>
                            </Grid>
                            <Grid container spacing={1} justifyContent="center">
                                <Grid item lg={3} sx={{marginRight: '60px'}}>
                                    <List>
                                        {skills.left.map((skill: IKeySkill) => (
                                            <ListItem sx={{marginTop: '25px'}}>
                                                <img src={skill.src} style={{height: '50px', marginRight: '15px'}}
                                                     alt={skill.description}/><Typography variant="h5"
                                                                                          color="black">{skill.title}</Typography>
                                            </ListItem>))}
                                    </List>
                                </Grid>
                                <Grid item lg={3}>
                                    <List>
                                        {skills.right.map((skill: IKeySkill) => (
                                            <ListItem sx={{marginTop: '25px'}}>
                                                <img src={skill.src} style={{height: '50px', marginRight: '15px'}}
                                                     alt={skill.description}/><Typography variant="h5"
                                                                                          color="black">{skill.title}</Typography>
                                            </ListItem>))}
                                    </List>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item lg={5} sx={{display: {xs: 'none', lg: 'block'}}}>
                        {aboutMeDescription.map((description) => (
                            <Typography variant="body1" color="black"
                                        marginBottom="10px">{description.description}</Typography>
                        ))}
                    </Grid>
                </Grid>
            </Box>
            <AboutWaveDivider/>
        </Box>
    )
}