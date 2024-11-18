import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#34549b', color: '#fff', py: 2, mt: 5 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body1">© 2024 Responsive Checker | ApolloDev</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
