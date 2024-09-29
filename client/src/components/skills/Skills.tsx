import React, {useCallback, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    CardMedia, Chip,
    Grid2 as Grid,
    IconButton, Stack,
    Typography
} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos, Circle, ExpandMoreRounded} from "@mui/icons-material";
import Carousel from 'react-material-ui-carousel';
import SkillsDivider from "./SkillsDivider";

export type Skill = {
    title : string,
    description : string,
    subSkills : SubSkill[],
    images : string[]
}

export type SubSkill = {
    title : string,
    description : string,
    projects : any
}

const skillsData : Skill[] = [
    {
        title: "Planification et conceptualisation d'une solution web",
        description: "sse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: [{
            title: "Rédiger un Cahier Des Charges (CDC)",
            description: "... En partant d'une expression de besoins, afin de cadrer fonctionnellement un projet de solution web dans le respect des réglementations en vigueur et notamment le RGPD",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Rédaction des spécifications techniques",
            description: "... En analysant un CDC, afin de cadrer techniquement un projet de développement de solution web",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Déploiement d'un environnement de travail",
            description: "... En mettant en place les outils de versionnage, de partage et de collaboration/communication nécessaires, afin de cadrer opérationnellement un projet de développement de solution web",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Réalisation de maquettes",
            description: "... Afin de permettre au client de valider la structure de la solution web en respectant les bonnes pratiques en termes d’ergonomie et d’accessibilité",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Identification des fonctionnalités à développer",
            description: "... En modélisant les divers éléments et leurs interconnexions, afin de structurer l'architecture de la solution web et de Base De Données (BDD)",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Rédaction d'une présentation des choix faits",
            description: "Rédiger une présentation pour présenter les choix techniques, les maquettes, et le schéma de la solution web en argumentant les choix faits afin de permettre au client ou au décideur de valider la proposition de solution",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }
        ],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        title: "Développement d'une solution web",
        description: "sse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: [{
            title: "Développement du prototype",
            description: "... afin de présenter l’architecture technique au client",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Rédaction du code",
            description: "... en transcrivant les fonctionnalités du CDC, en respectant les normes d’accessibilité, d’ergonomie, de référencement, et la réglementation en vigueur afin de développer la solution web",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Intégration des différents éléments",
            description: "... de la solution web en fonction des maquettes, en respectant les dernières normes des langages utilisés (HTML, CSS, JS, …)",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Implémentation du front-end",
            description: "... TBD",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Implémentation de la logique et de la base de données",
            description: "... assurant la persistance des données côté serveur (le \"back-end\")",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Implémentation des règles d'authentification",
            description: "en respectant les bonnes pratiques en matière de sécurité, afin de sécuriser l'accès à une solution web",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Implémentation d'un plan de tests",
            description: "en concevant les différents tests unitaires et d’intégration afin de vérifier que l’ensemble des fonctionnalités développées fonctionne bien séparément et à l’unisson",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Déploiement d'une solution",
            description: "en utilisant un serveur afin de rendre l’application accessible aux utilisateurs",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }
        ],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        title: "Déploiement d'un système d’assurance qualité tout au long du cycle de vie d’une solution web",
        description: "sse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: [{
            title: "Rédaction d'une documentation technique à destination des équipes",
            description: "... parties prenantes en réalisant la documentation technique et fonctionnelle de la solution web, afin de garantir sa pérennité et son évolution future",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Rédaction d'une documentation utilisateur",
            description: "... pour apporter un support aux utilisateurs, afin de garantir l'autonomie et la satisfaction des utilisateurs de la solution web",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Monitoring du lancement d'une solution web",
            description: "...  en recueillant les retours utilisateurs, afin d'évaluer la qualité de la solution web déployée",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Identification des améliorations qualitatives et de performance d'une solution web",
            description: "...  en analysant les retours utilisateurs et les données d'analyse du trafic, afin d'améliorer la qualité et la disponibilité d'une solution web déployée",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Analyse de  la qualité de l’ergonomie et la qualité de l’accessibilité de la solution",
            description: "... (normes, design, ergonomie, navigation, référencement, bonnes pratiques, etc.) pour identifier les axes d’amélioration",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }, {
            title: "Rédaction d'un document argumentatif",
            description: "en listant des propositions d'améliorations afin de faire valider des préconisations de développements correctifs d'une solution web",
            projects: [{
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }, {
                name: "Tweet Académie"
            }],
        }
        ],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
];

const SkillCarousel = ({currentSkill} : any) => (
    <Carousel autoPlay={false} indicators={false} navButtonsAlwaysVisible={true} cycleNavigation={false}>
        {currentSkill.images.map((image : any, index : any) => (
            <Card key={index}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={currentSkill.title}
                    sx={{width: '100%', height: 'auto'}}
                />
            </Card>
        ))}
    </Carousel>
);

const SkillDetails = ({skill, expanded, handleChange} : any) => {
    return (
        <Box sx={{height: '100%', minWidth: {lg: '750px'}}}>
            <Grid container textAlign="start" height={{xs: 'fit-content', lg: 'fit-content'}}>
                <Grid size={12}>
                    <Typography variant="h5" color="white"
                                sx={{mb: {lg: '50px'}, mt: {xs: '25px'}}}>{skill.title}</Typography>
                </Grid>
                <Grid size={12}>
                    {skill.subSkills.map((subSkill : any, index : number) => {
                        return (
                            <Accordion key={index} expanded={expanded === index} disableGutters={true}
                                       onChange={handleChange(index)} sx={{zIndex: 10, mb: 0.5, maxWidth: '90%'}}>
                                <AccordionSummary expandIcon={<ExpandMoreRounded/>}>
                                    {subSkill.title}
                                </AccordionSummary>
                                <AccordionDetails sx={{textAlign: 'justify'}}>
                                    {subSkill.description}
                                    <Stack direction="row" spacing={1} mt={3}>
                                        {subSkill.projects.map((project : { name : string }, index : number) => (
                                            <Chip key={index} label={project.name} color="secondary"/>
                                        ))}
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </Grid>
            </Grid>
        </Box>
    );
}

const NavigationDots = ({skills, currentSkillIndex, setCurrentSkillIndex} : any) => (
    <Box display="flex" justifyContent="center" mt={4}>
        {skills.map((_ : any, index : any) => (
            <Circle
                key={index}
                sx={{
                    color: index === currentSkillIndex ? 'white' : 'gray',
                    ":hover": {color: 'darkgray', cursor: 'pointer'},
                    mx: 0.5,
                    my: 2,
                    height: 20,
                    width: 20
                }}
                onClick={() => setCurrentSkillIndex(index)}
            />
        ))}
    </Box>
);

const Skills = () => {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const currentSkill = skillsData[currentSkillIndex];

    const previousSkill = useCallback(() => {
        setCurrentSkillIndex(prevIndex => (prevIndex === 0 ? skillsData.length - 1 : prevIndex - 1));
        setExpanded(false);
    }, []);

    const nextSkill = useCallback(() => {
        setCurrentSkillIndex(prevIndex => (prevIndex === skillsData.length - 1 ? 0 : prevIndex + 1));
        setExpanded(false);
    }, []);

    const [expanded, setExpanded] = React.useState<number | false>(false);

    const handleChange =
        (panel : number) => (event : React.SyntheticEvent, isExpanded : boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box id="skills" sx={{backgroundColor: 'rgb(18, 18, 18)', minHeight: '500px'}}>
            <Grid container justifyContent="center" spacing={2} width="100%">
                <Grid size={12}>
                    <Typography variant="h3" align="center" color="white" my="80px">Compétences
                        travaillées</Typography>
                </Grid>
                <Grid container width="100%">
                    <Grid container size={12}>
                        <Grid size={1} sx={{display: {xs: 'none', md: 'block', size: 'block'}}}
                              textAlign="center" alignSelf="center">
                            <IconButton size="large" onClick={previousSkill}>
                                <ArrowBackIosNew/>
                            </IconButton>
                        </Grid>
                        <Grid size={{xs: 12, lg: 5}}>
                            <SkillCarousel currentSkill={currentSkill}/>
                        </Grid>
                        <Grid justifyContent="start" size={{xs: 12, lg: 5}}>
                            <SkillDetails skill={currentSkill} expanded={expanded} handleChange={handleChange}/>
                        </Grid>
                        <Grid size={1} sx={{display: {xs: 'none', md: 'block', size: 'block'}}}
                              textAlign="center" alignSelf="center">
                            <IconButton size="large" onClick={nextSkill}>
                                <ArrowForwardIos/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <NavigationDots skills={skillsData} currentSkillIndex={currentSkillIndex}
                                setCurrentSkillIndex={setCurrentSkillIndex}/>
            </Grid>
            <SkillsDivider/>

        </Box>
    );
};

export default React.memo(Skills);
