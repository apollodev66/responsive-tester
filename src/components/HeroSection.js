import React from 'react';
import { Box, Typography, Container} from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#4e6cb4',
        color: '#fff',
        py: 10,
        textAlign: 'center'
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Responsive Screen Size Checker
        </Typography>
        <Typography variant="h6" gutterBottom>
          ดูผลลัพธ์ของเว็บไซต์ในขนาดหน้าจอต่างๆ
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
