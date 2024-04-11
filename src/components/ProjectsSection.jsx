import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

const ProjectsSection = () => {
  
const [projects, setProjects] = useState([
  {
    id: 1,
    title: 'Open-Ai Clone',
    image: 'images/chatgpt.png',
    description: 'This is made using Nodejs, reactjs, python, javascript, and some html and css'
  },
  {
    id: 2,
    title: 'HardHat',
    image: 'images/amazon.png',
    description: 'This is made using Nodejs, reactjs, python, javascript, and some html and css'
  },
  {
    id: 3,
    title: 'Rumango',
    image: 'images/hardhat.png',
    description: 'This is made using Nodejs, reactjs, python, javascript, and some html and css'
  },
  {
    id: 4,
    title: 'Ichi-Web',
    image: 'images/spotify.png',
    description: 'This is made using Nodejs, reactjs, python, javascript, and some html and css'
  }]
  
);

  return (
    <Container className="project-section-heading" id="projects">
      <Typography sx={{marginTop:'20px', marginBottom:"50px", fontWeight:600}} variant="h4" align="center" gutterBottom className="projects-heading">
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid key={project.id} item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectsSection;
