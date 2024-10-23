import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Theme, ThemeProvider} from "@mui/material";
import {SnackbarProvider} from "./components/layout/SnackbarContext";
import {createTheme} from "@mui/material/styles";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const darkTheme: Theme = createTheme({
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

root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <SnackbarProvider>
                <App/>
            </SnackbarProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
