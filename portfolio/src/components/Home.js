import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={5}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5">
          Hi! I’m [Your Name], a passionate developer skilled in [your skills]. 
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
