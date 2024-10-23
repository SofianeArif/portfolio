import React, {useCallback, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    CardMedia,
    Chip,
    Grid2 as Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos, Circle, ExpandMoreRounded, VerifiedRounded} from "@mui/icons-material";
import Carousel from 'react-material-ui-carousel';
import SkillsDivider from "./SkillsDivider";

export type Skill = {
    title: string,
    description: string,
    subSkills: SubSkill[],
    images: string[]
}

export type SubSkill = {
    title: string,
    description: string,
    projects: any
}

const {freeAds, portfolio, projetLibre, tomas, kdb, tweetAcademie, devResponsable, ecommerce} = {
    projetLibre: {
        name: "Projet libre",
        color: "secondary",
    },
    portfolio: {
        name: "Portfolio",
        color: "primary",
    },
    freeAds: {
        name: "Free Ads",
        color: "secondary"
    },
    tomas: {
        name: "Tomas",
        color: "primary",
        highlight: true,
    },
    kdb: {
        name: "Knowledge Database",
        color: "primary",
        highlight: true,
    },
    tweetAcademie: {
        name: "Tweet académie",
        color: "primary"
    },
    devResponsable: {
        name: "Développement responsable",
        color: "primary"
    },
    ecommerce: {
        name: "E-commerce",
        color: "primary"
    }
}

const skillsData: Skill[] = [
    {
        title: "Planification et conceptualisation d'une solution web",
        description: "sse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: [{
            title: "Rédiger un Cahier Des Charges (CDC)",
            description: "Un cahier des charges a été notamment rédigé dans le cadre du projet libre, afin de définir le besoin, délimiter le périmètre du projet, en s'adaptant aux contraintes imposées.",
            projects: [
                projetLibre
            ],
        }, {
            title: "Rédaction des spécifications techniques",
            description: "Une analyse du CDC du projet libre a été réalisée afin d'en produire les User Stories, nous permettant de cadrer les fonctionnalités.",
            projects: [
                projetLibre
            ],
        }, {
            title: "Déploiement d'un environnement de travail",
            description: "Github et Notion ont été choisis tout au long de la formation, respectivement pour le versionnage mais aussi pour la communication et l'organisation.",
            projects: [
                projetLibre,
                kdb
            ],
        }, {
            title: "Réalisation de maquettes",
            description: "Afin de travailler au mieux sur les projets, des maquettes ont été réalisées afin d'en définir le flux de navigation, la charte graphique ainsi que travailler l'expérience utilisateur au maximum.",
            projects: [
                projetLibre,
                tweetAcademie,
                portfolio
            ],
        }, {
            title: "Identification des fonctionnalités à développer",
            description: "Au travers des principaux projets, nous avons appris à définir les fonctionnalités à réaliser via la mise en place des points précédents, de la mise en place du cahier des charges grâce au sujet, mise en place du navigation flow (flux de navigation) permettant de rendre cohérente la navigation entre toutes les fonctionnalités, nous forçant donc à bien les réfléchir en amont.",
            projects: [
                projetLibre,
                portfolio,
                tweetAcademie,
                kdb
            ],
        }, {
            title: "Rédaction d'une présentation des choix faits",
            description: "Une fois un projet réalisé, nous devions le présenter avec un Powerpoint, détaillant le processus de création, et permettant de soutenir les décisions prises au cours de la réalisation de celui-ci.",
            projects: [
                projetLibre,
                kdb,
                tweetAcademie,
                portfolio,
            ],
        }
        ],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        title: "Développement d'une solution web",
        description: "sse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: [{
            title: "Développement du prototype",
            description: "Dans le but de créer un Proof of Concept (Preuve de concept), un prototype a été réalisé pour le projet libre, afin de valider les choix techniques et fonctionnels, notamment leur faisabilité.",
            projects: [
                projetLibre,
                ecommerce
            ],
        }, {
            title: "Rédaction du code",
            description: "La partie rédaction du code a été travaillée tout au long de la formation, de la rédaction seul au Peer Coding (Code à plusieurs sur la même machine), une étape cruciale à la limitation de la dette technique d'un projet.",
            projects: [
                freeAds,
                projetLibre,
                portfolio
            ],
        }, {
            title: "Intégration des différents éléments",
            description: "En se basant sur les maquettes et les diverses normes UI/UX que nous avons essayé de respecter, lors de notre apprentissage, l'intégration des éléments dans les projets se sont fait principalement par les maquettes, une fois celles-ci appréhendées.",
            projects: [
                projetLibre,
                portfolio,
                ecommerce
            ],
        }, {
            title: "Implémentation du front-end",
            description: "Pour cette partie, favoriser l'utilisation de bibliothèques populaires était la priorité, savoir utiliser des outils grandement adoptés, tels que Bootstrap ou MaterialUI pour React, respectant les diverses normes, accessibilité, UI/UX...",
            projects: [
                freeAds,
                projetLibre,
                portfolio
            ],
        }, {
            title: "Implémentation de la logique et de la base de données",
            description: "Plusieurs patrons de conception ont étés appris durant la formation, du MVC (Model View Controller) utilisé notamment sur le projet FreeAds, mais aussi le MVP, MVVM, Singleton, Adapter, Factory Method, Command et bien d'autres.",
            projects: [
                freeAds,
                projetLibre,
                portfolio
            ],
        }, {
            title: "Implémentation des règles d'authentification",
            description: "Au travers de l'utilisation de cryptage de mots de passe (pepper and salt), hashage de ceux-ci ou encore l'utilisation de JWT (JSON Web Token), pour garantir une sécurité optimale des données sensibles.",
            projects: [
                freeAds,
                projetLibre,
                portfolio
            ],
        }, {
            title: "Implémentation d'un plan de tests",
            description: "Dans le cadre de mon alternance, j'ai pu mettre en place des tests unitaires, s'assurant du bon fonctionnement d'une méthode, ainsi que des tests end-to-end, simulant un utilisateur réalisant des actions via l'interface, afin de valider des milliers de comportements simplement, via des règles de fonctionnement, à la manière des tests unitaires.",
            projects:[
                freeAds,
                projetLibre,
                portfolio
            ],
        }, {
            title: "Déploiement d'une solution",
            description: "Dans le cadre de ce projet, ainsi que du projet libre, j'ai été ammené à utiliser un serveur, sur lequel j'ai mis en place un déploiement simplifié, grâce à Portainer (Gestionnaire de conteneurs Docker) ainsi que MinIO (Facilitant la gestion du stockage) tout ceci en travaillant la sécurité des connexions au serveur, ",
            projects: [
                freeAds,
                projetLibre,
                portfolio
            ],
        }
        ],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        title: "Déploiement d'un système d’assurance qualité tout au long du cycle de vie d’une solution web",
        description: "sse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: [{
            title: "Rédaction d'une documentation technique à destination des équipes",
            description: "Au cours des premiers projets en équipe, l'importance de la documentation technique s'est ressentie, pour répondre à ceci, nous commentions le code au maximum pour faciliter la compréhension entre les membres de l'équipe. Au cours de mon alternance, documenter chaque partie potentiellement mal comprise ou précise est nécessaire, les revues de code permettant de ne pas oublier cette étape.",
            projects: [
                tomas,
                projetLibre,
                kdb
            ],
        }, {
            title: "Rédaction d'une documentation utilisateur",
            description: "Dans le cadre de mon sujet d'alternance, j'ai dû réaliser une documentation des fonctionnalités de la base de connaissance, avec des images de chaque action et les possibilités correspondantes. Le même travail a été réalisé en alternance, sur le projet principal de l'entreprise, Tomas, où après chaque nouvelle fonctionnalité, la documentation utilisateur devait être mise à jour.",
            projects: [
                kdb,
                tomas,
                projetLibre
            ],
        }, {
            title: "Monitoring du lancement d'une solution web",
            description: "Des tests ont été effectués, notamment sur le projet libre et le portfolio, en faisant essayer l'application à des utilisateurs n'ayant pas contribués à sa production, permettant des retours et des améliorations constantes. Sur les projets d'alternance, c'est la méthode AGILE qui nous permet de travailler tout en récoltant un retour utilisateur toutes les deux semaines.",
            projects: [
                tomas,
                projetLibre,
                portfolio,
                kdb
            ],
        }, {
            title: "Identification des améliorations qualitatives et de performance d'une solution web",
            description: "Grâce au point précédent, nous avons pu mettre en place sur les projets, des correctifs, souvent un changement niveau UI et UX, sur la manière dont sont les fonctionnalités sont présentées et utilisables.",
            projects: [
                projetLibre,
                portfolio,
                tweetAcademie
            ],
        }, {
            title: "Analyse de la qualité de l’ergonomie et la qualité de l’accessibilité de la solution",
            description: "Des outils tels que PageSpeed Insights ou Accessibility Checker ont été utilisés pour travailler au maximum les performances et le bon fonctionnement des sites pour tous.",
            projects: [
                tweetAcademie
            ],
        }, {
            title: "Rédaction d'un document argumentatif",
            description: "Dans le but du bon maintien des applications et de leur constante amélioration, un projet a été réalisé, visant à nous responsabiliser sur les performances d'une application, son accessibilité mais aussi son impact sur l'environnement, tout cela étant lié à la qualité globale, nous avons donc appris à rédiger des documents....",
            projects: [
                devResponsable
            ],
        }
        ],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
];

const SkillCarousel = ({currentSkill}: any) => (
    <Carousel autoPlay={false} indicators={false} navButtonsAlwaysVisible={true} cycleNavigation={false}>
        {currentSkill.images.map((image: any, index: any) => (
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

const SkillDetails = ({skill, expanded, handleChange}: any) => {
    return (
        <Box sx={{height: '100%', minWidth: {lg: '750px'}}}>
            <Grid container textAlign="start" height={{xs: 'fit-content', lg: 'fit-content'}}>
                <Grid size={12}>
                    <Typography variant="h5" color="white"
                                sx={{mb: {lg: '10px'}, mt: {xs: '15px', md: 0}}}>{skill.title}</Typography>
                    <Typography variant="body2" color="white"
                                sx={{mb: {lg: '30px'}}}><VerifiedRounded sx={{pt: '8px'}}/> Projets d'alternance</Typography>
                </Grid>
                <Grid size={12}>
                    {skill.subSkills.map((subSkill: any, index: number) => {
                        return (
                            <Accordion key={index} expanded={expanded === index} disableGutters={true}
                                       onChange={handleChange(index)} sx={{zIndex: 10, mb: 0.5, maxWidth: '90%'}}>
                                <AccordionSummary expandIcon={<ExpandMoreRounded/>}>
                                    {subSkill.title}
                                </AccordionSummary>
                                <AccordionDetails sx={{textAlign: 'justify'}}>
                                    {subSkill.description}
                                    <Stack direction="row" spacing={1} mt={3}>
                                        {subSkill.projects.map((project: {
                                            name: string,
                                            color: any,
                                            highlight: string,
                                            variant: "outlined" | "filled"
                                        }, index: number) => (
                                            <Chip key={index} label={project.name} color={project.color} variant={project.variant ?? "filled"} icon={project.highlight ? <VerifiedRounded/> : <></>}/>
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

const NavigationDots = ({skills, currentSkillIndex, setCurrentSkillIndex}: any) => (
    <Box display="flex" justifyContent="center" mt={4}>
        {skills.map((_: any, index: any) => (
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
        (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
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
                            <IconButton size="large" onClick={previousSkill} sx={{mr: 3}}>
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
                            <IconButton size="large" onClick={nextSkill} sx={{ml: 3}}>
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
