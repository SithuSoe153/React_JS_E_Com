import React, { Component } from 'react'


import { Typography, Box, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { CategoryImageSection } from './components/CategoryImageSection'
import { CarouselComponent } from './components/CarouselComponent'
import { PromotionCoupon } from './components/PromotionCoupon'

import './index.css'

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

          <HeroSection />

          <CategoryImageSection />

          <Box style={{ margin: 30, backgroundColor: '#f8f8f8', margin: 300 }}>

          </Box>

          <CarouselComponent />

          <PromotionCoupon />


        </ThemeProvider >


      </>
    )
  }
}

export default App;
