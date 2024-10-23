import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {List, ListItem} from "@mui/material";
import {Grid2 as Grid} from "@mui/material/";
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

    const aboutMeDescription: { description: string }[] = [
        {
            description: "Passionné depuis toujours par l'informatique, j'ai décidé d'intégrer la formation Web@cadémie by Epitech afin de parfaire mes compétences dans ce domaine. Me permettant, à terme, d'avoir la capacité d'aborder de nouveaux langages, de nouveaux défis, et d'apporter des solutions à des problèmes concrets du domaine."
        },
        {
            description: "Au cours de mon alternance, qui fut mon expérience la plus appréciable et enrichissante jusqu'à présent. J'ai pu avoir l'occasion de réaliser de nouveaux défis, notamment avec la découverte du framework Aurelia et de l'apprentissage de Typescript."
        }
    ];

    return (
        <Box id="about" sx={{
            backgroundColor: "rgb(242, 242, 243)",
            minHeight: "500px",
        }}>
            <Typography variant="h3" align="center" color="black" sx={{paddingTop: '50px'}}>À propos de moi</Typography>
            <Box sx={{
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
                my: {lg: '50px', xs: '25px'},
                maxWidth: "lg",
            }}>
                <Grid container spacing={16} justifyContent="center" alignItems="center"
                      sx={{paddingBottom: '50px'}}>
                    <Grid size={{lg: 7}}>
                        <Grid container direction="column" justifyContent="center" alignItems="center">
                            <Grid size={{lg: 1}}>
                                <Typography variant="h5" align="center" color="black">Compétences
                                    principales</Typography>
                            </Grid>
                            {/* Desktop   */}
                            <Grid display={{xs: 'none', md: 'inherit'}} container spacing={1} justifyContent="center">
                                <Grid size={{lg: 3}} sx={{marginRight: '60px'}}>
                                    <List className="icon-container">
                                        {skills.left.map((skill: IKeySkill) => (
                                            <ListItem key={skill.title} sx={{marginTop: '25px'}}>
                                                <img src={skill.src} className="icon"
                                                     style={{height: '50px', marginRight: '15px'}}
                                                     alt={skill.description}/><Typography variant="h5"
                                                                                          color="black">{skill.title}</Typography>
                                            </ListItem>))}
                                    </List>
                                </Grid>
                                <Grid size={{lg: 3}}>
                                    <List className="icon-container">
                                        {skills.right.map((skill: IKeySkill) => (
                                            <ListItem key={skill.title} sx={{marginTop: '25px'}}>
                                                <img src={skill.src} className="icon"
                                                     style={{height: '50px', marginRight: '15px'}}
                                                     alt={skill.description}/><Typography variant="h5"
                                                                                          color="black">{skill.title}</Typography>
                                            </ListItem>))}
                                    </List>
                                </Grid>
                            </Grid>
                            {/*    Mobile */}
                            <Grid display={{xs: 'inherit', md: 'none'}} container spacing={4} justifyContent="center">
                                <Grid size={{xs: 6}}>
                                    <List>
                                        {skills.left.map((skill: IKeySkill) => (
                                            <ListItem key={skill.title} sx={{marginTop: '25px'}}>
                                                <img src={skill.src} style={{height: '50px'}}
                                                     alt={skill.description}/>
                                            </ListItem>))}
                                    </List>
                                </Grid>
                                <Grid size={{xs: 6}}>
                                    <List>
                                        {skills.right.map((skill: IKeySkill) => (
                                            <ListItem key={skill.title} sx={{marginTop: '25px'}}>
                                                <img src={skill.src} style={{height: '50px'}}
                                                     alt={skill.description}/>
                                            </ListItem>))}
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{lg: 5}} sx={{display: {xs: 'none', lg: 'block'}}}>
                        {aboutMeDescription.map((description) => (
                            <Typography key={description.description} variant="body1" color="black"
                                        marginBottom="10px" lineHeight="24px">{description.description}</Typography>
                        ))}
                    </Grid>
                </Grid>
            </Box>
            <AboutWaveDivider/>
        </Box>
    )
}
