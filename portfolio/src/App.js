import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Container, Button, Box } from '@mui/material';


function App() {
    return (
        <div>
          <Button variant="contained" color="primary" sx={{ mt: 2, px: 4 }}>
        Learn More
          </Button>
            {/* AppBar for Navigation */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Portfolio
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container>
                <Box mt={4}>
                    <Typography variant="h1" align="center" gutterBottom>
                        Welcome to My Portfolio
                    </Typography>
                    <Typography variant="body1" align="center">
                        A showcase of my projects and skills.
                    </Typography>
                </Box>

                {/* Project Section */}
                <Grid container spacing={4} mt={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box bgcolor="primary.main" p={2} color="white" textAlign="center">
                            <Typography variant="h5">Project 1</Typography>
                            <Typography>Project description goes here.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box bgcolor="secondary.main" p={2} color="white" textAlign="center">
                            <Typography variant="h5">Project 2</Typography>
                            <Typography>Project description goes here.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box bgcolor="primary.main" p={2} color="white" textAlign="center">
                            <Typography variant="h5">Project 3</Typography>
                            <Typography>Project description goes here.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
