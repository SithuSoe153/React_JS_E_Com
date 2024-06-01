import React, { Component } from 'react'

import { Outlet } from 'react-router-dom'

import { Typography, Box, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

import '../index.css'

const theme = createTheme({

    overrides: {
        MuiAppBar: {
            root: {
                padding: '0px 30px'
            }
        },
    },


    palette: {
        primary: {
            main: '#FE3639',
        },
        secondary: {
            main: '#ffffff',
        }
    },
});





class App extends Component {
    render() {
        return (
            <>
                <CssBaseline />
                <ThemeProvider theme={theme}>

                    <NavBar />

                    <Outlet />

                    <Footer />

                </ThemeProvider >


            </>
        )
    }
}

export default App;
