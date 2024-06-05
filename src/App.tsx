import './App.css'
import Education from './components/Education'
import Projects from "./components/Projects.tsx";
import Introduction from "./components/Introduction.tsx";
import {createTheme, GlobalStyles, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar.tsx";
// import Connect from "./components/Connect.tsx";
import About from "./components/About.tsx";

function App() {



    const theme = createTheme({
        palette: {
            primary: {
                main: '#8E94F2',
                // contrastText: '#A4C2A8'
            },
            secondary: {
                main: '#9FA0FF',
            },
            background: {
                default: '#1b1b1c'
            },
            text: {
                primary: '#e9e6ef',
                secondary: '#9FA0FF',
            },
        },
        typography: {
            fontFamily: 'Montserrat',
            h4: {
                fontSize: '2.5rem',
                fontWeight: 500,
                // color: '#A4C2A8'
            },
            h6: {
                fontSize: '1.5rem',
                fontWeight: 400,
                // color: '#A4C2A8'
            },
            subtitle1: {
                fontSize: '1.2rem',
                fontWeight: 300,
                // color: '#A4C2A8'
            },
            subtitle2: {
                fontSize: '1rem',
                fontWeight: 300,
                // color: '#A4C2A8'
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        // color: '#A4C2A8'
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#5A5A66',
                        // color: '#A4C2A8'
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        // color: '#A4C2A8']
                    },
                    selected: {
                        fontSize: '1.5rem',
                        color: '#A4C2A8'
                    },
                }
            },
            MuiAppBar:{
                styleOverrides:{
                    root:{
                        backgroundColor: '#1b1b1c',
                        color: '#e9e6ef'
                    }
                }
            },
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
            <GlobalStyles styles={(theme)=>({
                body: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary
                },
                a: {
                    // color: theme.palette.text.primary + ' !important'
                }
            })}></GlobalStyles>
            <NavBar></NavBar>
            <Introduction></Introduction>
            <About></About>
            <Projects/>
            <Education/>
            {/*<Connect></Connect>*/}
        </ThemeProvider>
    )
}

export default App
