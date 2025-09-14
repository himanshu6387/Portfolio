import { Container, Box } from '@mui/material';
import React from 'react';
import { createTheme } from '@mui/material/styles';

const ProfileCard = () => {
  return (
    <Container  sx={{ border: 2, marginBottom:'30px', marginTop:'30px' }}>
      <Box className="profile-card">
        <div className="profile-photo-container">
          <img src="/images/flaviu.jpg" alt="Your" className="profile-photo"/>
        </div>
        
        <Container class="scrolling-text-container">
          <div className="scrolling-text">
            <div className="slide build-text">Coder</div>
            <div className="slide create-text">Developer</div>
            <div className="slide design-text">Engineer</div>
            <div className="slide code-text">Creater</div>
            <div className="slide build-text">Coder</div> 
          </div>
        </Container>
        </Box>
    </Container>
  );
}

export default ProfileCard;
