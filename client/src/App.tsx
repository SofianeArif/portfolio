import {Container, CssBaseline, Theme} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HeroBanner from "./components/hero-banner/HeroBanner";
import Skills from "./components/skills/Skills";
import About from "./components/about-me/About";
import Projects from "./components/projects/ProjectsGallery";
import Footer from "./components/layout/Footer";
import ReviewsFB from "./components/reviews/ReviewsFB";
import ContactForm from "./components/contact/ContactForm";
import Reviews from "./components/reviews/Reviews";
import {SnackbarProvider} from "./components/layout/SnackbarContext";
import Dashboard from './components/dashboard/Dashboard';
import React, {useEffect} from "react";
import {Review} from "./types/Review";
import * as reviewService from "./services/ReviewService";

export const darkTheme : Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#662d91'
        },
        secondary: {
            main: '#662d91'
        }
    },
    typography: {
        fontFamily: ['Open sans', 'sans-serif', 'open-sans'].join(',')
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#121212',
                    backgroundImage: "none"
                }
            },
        }
    },
});

const App : React.FC = () => {
    const [reviewsData, setReviewsData] = React.useState<Review[]>([]);

    const fetchReviews = async () => {
        try {
            const { data } = await reviewService.getAllApproved();
            setReviewsData(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des avis :', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <SnackbarProvider>
                <CssBaseline/>
                <Router>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/"
                            element={
                                <>
                                    <header className="App-header">
                                        <Navbar style={{}} />
                                    </header>
                                    <Container sx={{ alignContent: 'center', justifyContent: 'center' }} maxWidth={false} disableGutters>
                                        <HeroBanner />
                                        <About />
                                        <Skills />
                                        <Projects />
                                        <Reviews reviewsData={reviewsData}/>
                                        <ContactForm />
                                        <Footer />
                                        <ReviewsFB />
                                    </Container>
                                </>
                            }
                        />
                    </Routes>
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
