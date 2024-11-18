import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResponsiveDisplay from './components/ResponsiveDisplay';
import ResponsiveTester from './components/ResponsiveTester';
import Footer from './components/Footer';
import { CssBaseline, Container } from '@mui/material';
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Kanit', sans-serif", // กำหนดฟอนต์สำหรับ MUI
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <Container maxWidth="lg">
        <ResponsiveDisplay />
        <ResponsiveTester />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
