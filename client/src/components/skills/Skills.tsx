import React, {useCallback, useState} from "react";
import {Box, Card, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos, Circle, Loupe} from "@mui/icons-material";
import Carousel from 'react-material-ui-carousel';
import Button from "@mui/material/Button";

const skillsData = [
    {
        title: "Développement Web",
        description: "Lorem ip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: ["Compétence 1, Compétence 2, Compétence 3"],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        title: "Gestion de Projet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: ["Compétence 1, Compétence 2, Compétence 3"],
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"]
    },
    {
        title: "Conception UI/UX",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        subSkills: ["Compétence 1, Compétence 2, Compétence 3"],
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

const SkillDetails = ({skill}: any) => (
    <Grid container direction={"column"} justifyContent="center" minHeight={{lg: 400}}>
        <Grid item lg={5}>
            <Typography variant="h5" color="white" sx={{mb: '50px'}}>{skill.title}</Typography>
        </Grid>
        <Grid item lg={5}>
            <Typography variant="body1" color="white">{skill.description}{skill.description}</Typography>
        </Grid>
        <Grid item lg={2}>
            <Button variant="outlined" color="primary" sx={{mt: 2}}><Loupe/>En savoir plus</Button>
        </Grid>
    </Grid>
);

const NavigationDots = ({skills, currentSkillIndex, setCurrentSkillIndex}: any) => (
    <Box display="flex" justifyContent="center" mt={2}>
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
    }, []);

    const nextSkill = useCallback(() => {
        setCurrentSkillIndex(prevIndex => (prevIndex === skillsData.length - 1 ? 0 : prevIndex + 1));
    }, []);

    return (
        <Box id="skills" sx={{backgroundColor: 'black', padding: 4, minHeight: '500px'}}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" minHeight={500}>
                <Grid item lg={12} xs={12}>
                    <Typography variant="h3" align="center" color="white" my="30px">Compétences
                        travaillées</Typography>
                </Grid>
                <Grid item lg={12} xs={12}>
                <Grid container>
                    <Grid item lg={1} md={1} sx={{display: {xs: 'none', md: 'block', lg: 'block'}}} textAlign="center" alignSelf="center">
                        <IconButton size="large" onClick={previousSkill}>
                            <ArrowBackIosNew/>
                        </IconButton>
                    </Grid>
                    <Grid item lg={5} xs={12} md={5}>
                        <SkillCarousel currentSkill={currentSkill}/>
                    </Grid>
                    <Grid item lg={5} xs={12} md={5} textAlign="center" justifyContent="center">
                        <SkillDetails skill={currentSkill}/>
                    </Grid>
                    <Grid item lg={1} md={1} sx={{display: {xs: 'none', md: 'block', lg: 'block'}}} textAlign="center" alignSelf="center">
                        <IconButton size="large" onClick={nextSkill}>
                            <ArrowForwardIos/>
                        </IconButton>
                    </Grid>
                </Grid>

                </Grid>
                <NavigationDots skills={skillsData} currentSkillIndex={currentSkillIndex}
                                setCurrentSkillIndex={setCurrentSkillIndex}/>
            </Grid>
        </Box>
    );
};

export default React.memo(Skills);