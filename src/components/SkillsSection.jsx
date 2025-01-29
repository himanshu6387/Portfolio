import React from 'react';
import { Container, Grid, Typography, Box, Chip } from '@mui/material';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML', icon: null },
    { name: 'CSS', icon: null },
    { name: 'Tailwind', icon: null },
    { name: 'Javascript', icon: null },
    { name: 'Typescript', icon: null },
    { name: 'React Js', icon: null },
  ];

  const backendSkills = [
    { name: 'Servlet', icon: null },
    { name: 'JSP', icon: null },
    { name: 'Nodejs', icon: null },
    { name: 'Express Js', icon: null },
    { name: 'Spring', icon: null },
    { name: 'Springboot', icon: null },
  ];

  const databaseSkills = [
    { name: 'MYSQL', icon: null },
    { name: 'Oracle', icon: null },
    { name: 'MongoDB', icon: null },
    { name: 'DB2', icon: null },
     { name: 'NoSQL', icon: null },
    { name: 'JDBC', icon: null },
  ];

  const otherSkills = [
    { name: 'Google Cloud', icon: null },
    { name: 'Microsoft Azure', icon: null },
    { name: 'DBMS', icon: null },
    { name: 'Linux OS', icon: null },
  
  ];

  const renderChip = (name, icon) => {
    return (
      <Chip
        icon={icon}
        label={name}
        key={name}
        variant="outlined"
        sx={{ margin: 0.5 }}
      />
    );
  };

  return (
    <Container sx={{  marginBottom:'60px', marginTop:'30px' }}>
      <Typography sx={{marginTop:'50px', marginBottom:"50px", fontWeight:600}} variant="h4" align="center" gutterBottom className="skill-heading">
        What I know
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Frontend</Typography>
            <div className="flx flx-wrap g2">
              {frontendSkills.map(skill => renderChip(skill.name, skill.icon))}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Back-end</Typography>
            <div className="flx flx-wrap g2">
              {backendSkills.map(skill => renderChip(skill.name, skill.icon))}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Database</Typography>
            <div className="flx flx-wrap g2">
              {databaseSkills.map(skill => renderChip(skill.name, skill.icon))}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{marginBottom:'20px'}} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Familiarities</Typography>
            <div className="flx flx-wrap g2">
              {otherSkills.map(skill => renderChip(skill.name, skill.icon))}
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SkillsSection;
