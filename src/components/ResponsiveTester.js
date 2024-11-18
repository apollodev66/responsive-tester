import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const ResponsiveTester = () => {
  const [url, setUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');

  const handleInputChange = (e) => setUrl(e.target.value);

  const handleTestClick = () => {
    if (url) {
      setIframeUrl(url.startsWith('http') ? url : `https://${url}`);
    }
  };

  return (
    <Box sx={{ py: 5, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        ตรวจสอบ Responsive ของเว็บไซต์
      </Typography>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
      >
        <TextField
          label="ใส่ลิงก์เว็บไซต์ (e.g., https://example.com)"
          variant="outlined"
          fullWidth
          value={url}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleTestClick}
          sx={{ backgroundColor: '#4e6cb4', ':hover': { backgroundColor: '#3b5a8c' } }}
        >
          ตรวจสอบ
        </Button>
      </Box>

      {iframeUrl && (
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {/* Mobile และ Tablet View (เรียงกันในแถวเดียว) */}
            <Grid
              item
              container
              spacing={4}
              justifyContent="center"
              direction="row"
              sx={{ flexWrap: 'nowrap', overflowX: 'auto' }}
            >
              {/* Mobile View */}
              <Grid item>
                <Typography variant="h6" gutterBottom sx={{ color: '#e2bf7e' }}>
                  Mobile View (375px x 667px)
                </Typography>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    border: '2px solid #e2bf7e',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    width: '375px',
                    height: '667px',
                    mx: 'auto',
                    boxShadow: 3,
                  }}
                >
                  <iframe
                    src={iframeUrl}
                    title="Mobile View"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </Box>
              </Grid>

              {/* Tablet View */}
              <Grid item>
                <Typography variant="h6" gutterBottom sx={{ color: '#4e6cb4' }}>
                  Tablet View (768px x 1024px)
                </Typography>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    border: '2px solid #4e6cb4',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    width: '768px',
                    height: '1024px',
                    mx: 'auto',
                    boxShadow: 3,
                  }}
                >
                  <iframe
                    src={iframeUrl}
                    title="Tablet View"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Laptop View (แสดงในแถวถัดไป) */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 4, color: '#34549b' }}>
                Laptop View (1366px x 768px)
              </Typography>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  border: '2px solid #34549b',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  width: '1366px',
                  height: '768px',
                  mx: 'auto',
                  boxShadow: 3,
                }}
              >
                <iframe
                  src={iframeUrl}
                  title="Laptop View"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ResponsiveTester;
