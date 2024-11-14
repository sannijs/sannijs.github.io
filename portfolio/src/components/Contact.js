import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

function Contact() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" noValidate autoComplete="off" >
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit" component={Link} to="about" smooth={true} duration={500}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
