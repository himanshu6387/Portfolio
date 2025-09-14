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
    description: 'This is made using Nodejs, Reactjs, Javascript, and Tailwind CSS and also some Python like Technologies',
    link: ''
  },
  {
    id: 2,
    title: 'Job Portal',
    image: 'https://www.nocturesolutions.com/Content/img/solutionBanners/job.jpg',
   description: 'This project is built using React, Node.js, Express.js, MongoDB, and Tailwind CSS, with JWT and bcrypt for secure authentication.',
   link:'https://job-portalfrontend-five.vercel.app/'
  },
  {
    id: 3,
    title: 'E-Commerce',
    image: 'https://tse2.mm.bing.net/th/id/OIP.yKOc__wAqqzS5EYi6Psz4gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'This is made using Core Java, Advanced Java like JSP, Servlet, JDBC and Javascript like Technogies',
    link:'https://ecommerce-mernfrontend.vercel.app/'

  },
  
   {
    id: 4,
    title: 'Social Media',
    image: 'https://tse2.mm.bing.net/th/id/OIP.Wg_2zWu1B_HwIKXiUcB2uQHaF7?rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'This is made using Nodejs, Express,Reactjs,Javascript,MongoDB and Tailwind CSS, with JWT and bcrypt for secure authentication.',
    link:'https://social-media-vert-nine.vercel.app/'
  },

]
  
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
                  <a href={project.link}>LEARN MORE</a>
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
