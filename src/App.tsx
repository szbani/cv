import './App.css'
import Education from './components/Education'
import Projects from "./components/Projects.tsx";
import Introduction from "./components/Introduction.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar.tsx";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#2A2B2E',
                contrastText: '#A4C2A8'
            },
            secondary: {
                main: '#5A5A66',
                contrastText: '#ACEB98'
            },
            background: {
                default: '#2A2B2E'
            },
            text: {
                primary: '#ede9e9',
                secondary: '#A4C2A8'
            }
        },
        typography: {
            fontFamily: 'Montserrat',
            h4: {
                fontSize: '2.5rem',
                fontWeight: 500,
                color: '#A4C2A8'
            },
            h6: {
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#A4C2A8'
            },
            subtitle1: {
                fontSize: '1.2rem',
                fontWeight: 300,
                color: '#A4C2A8'
            },
            subtitle2: {
                fontSize: '1rem',
                fontWeight: 300,
                color: '#A4C2A8'
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: '#A4C2A8'
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#5A5A66',
                        color: '#A4C2A8'
                    }
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: {
                        color: '#A4C2A8'
                    }
                }
            }
        },
        spacing: 8,
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920
            }
        },



    });

    return (
        <ThemeProvider theme={theme}>
            <NavBar></NavBar>
            {/*<Introduction></Introduction>*/}
            {/*<Projects/>*/}
            <Education/>
        </ThemeProvider>
    )
}

export default App
