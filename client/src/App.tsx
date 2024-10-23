import {Container, CssBaseline} from '@mui/material';
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
import {useSnackbar} from "./components/layout/SnackbarContext";
import Dashboard from './components/dashboard/Dashboard';
import React, {useEffect} from "react";
import {Review} from "./types/Review";
import * as reviewService from "./services/ReviewService";

const App: React.FC = () => {
    const {showSnackbar} = useSnackbar();

    const [reviewsData, setReviewsData] = React.useState<Review[]>([]);

    const fetchReviews = async () => {
        try {
            const {data} = await reviewService.getAllApproved();
            setReviewsData(data);
        } catch (error) {
            showSnackbar("Erreur lors de la récupération des avis.", "error");
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <>
            <CssBaseline/>
            <Router>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route
                        path="/"
                        element={
                            <>
                                <header className="App-header">
                                    <Navbar style={{}}/>
                                </header>
                                <Container sx={{alignContent: 'center', justifyContent: 'center'}} maxWidth={false}
                                           disableGutters>
                                    <HeroBanner/>
                                    <About/>
                                    <Skills/>
                                    <Projects/>
                                    <Reviews reviewsData={reviewsData}/>
                                    <ContactForm/>
                                    <Footer/>
                                    <ReviewsFB/>
                                </Container>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
