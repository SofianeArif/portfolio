import {Container, CssBaseline, Theme} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from './components/Navbar';
import HeroBanner from "./components/hero-banner/HeroBanner";
import Skills from "./components/skills/Skills";
import About from "./components/about-me/About";
import React from "react";
import Projects from "./components/projects/Projects";

const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: ['Open sans', 'sans-serif', 'open-sans'].join(',')
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <header className="App-header">
                <Navbar/>
            </header>
            <Container sx={{alignContent: 'center', justifyContent: 'center'}} maxWidth={false} disableGutters>
                <HeroBanner/>
                <About/>
                <Skills/>
                <Projects/>
            </Container>
        </ThemeProvider>
    );
}

export default App;