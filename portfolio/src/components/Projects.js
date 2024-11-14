import React from 'react';
import { Typography, Container, Card, CardContent, CardMedia, Grid } from '@mui/material';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more projects here
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
