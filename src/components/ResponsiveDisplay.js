import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

const ResponsiveDisplay = () => {
  const isXs = useMediaQuery('(max-width:600px)');
  const isSm = useMediaQuery('(min-width:600px) and (max-width:900px)');
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1200px)');
  const isLg = useMediaQuery('(min-width:1200px) and (max-width:1536px)');
  const isXl = useMediaQuery('(min-width:1536px)');

  const getScreenSize = () => {
    if (isXs) return 'XS (Mobile)';
    if (isSm) return 'SM (Tablet)';
    if (isMd) return 'MD (Small Laptop)';
    if (isLg) return 'LG (Large Laptop)';
    if (isXl) return 'XL (Desktop)';
    return 'Unknown';
  };

  return (
    <Box sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h4">Current Screen Size</Typography>
      <Typography variant="h2" color="primary" sx={{ mt: 2 }}>
        {getScreenSize()}
      </Typography>
    </Box>
  );
};

export default ResponsiveDisplay;
