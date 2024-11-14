import React from 'react';
import { Typography, Container, Card, CardContent, Grid2 } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={6}>
          <Grid2>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Background
              </Typography>
              <Typography>
                I am a passionate developer with experience in JavaScript, React, and Node.js. I
                enjoy building responsive web applications and constantly strive to improve my
                skills.
              </Typography>
            </CardContent>
          </Grid2>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Grid2>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Skills
              </Typography>
              <Typography>
                - JavaScript, React, Node.js <br />
                - HTML, CSS, and responsive design <br />
                - Git, GitHub, and Agile workflows
              </Typography>
            </CardContent>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default About;
