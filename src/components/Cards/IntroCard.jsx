import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import BasicTabs from './tabs';
import { Tab } from 'bootstrap';

function IntroCard() {
  return (
   <Container>
   
     <section className="home bd-grid" id="home" >
    <div className="home__data" >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} 
          className="home__title " 
          style={{ marginTop: '0' }}
        >
          <span  className='sub-text'>Hello,</span><br/>
          <span className='gradient-text'>I am Himanshu</span><br/> 
          <span className='sub-text'> 
            <Container className="scrolling-text-container" style={{ marginTop: '10px',  paddingLeft:0 }}>
              <div className="scrolling-text">
                <div className="slide build-text">Coder</div>
                <div className="slide create-text">Developer</div>
                <div className="slide design-text">Explorer</div>
                <div className="slide code-text">Creater</div>
                <div className="slide build-text">Coder</div> 
              </div>
            </Container>
          </span>
        </motion.h1>

        <Button variant='outlined' href="#contact"  sx={{border:'1px solid grey', borderRadius:15, fontWeight:"550"}}>Contact</Button>
    </div>

    <div className="home__social" >
     
        {/* <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
        <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a> */}
    </div>

    <div className="home__img">
        <svg className="home__blob" viewBox="0 0 479 467">
            <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            </mask>
            <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                <image className="home__blob-img" x="50" y="60" href="himanshu.png"/>
            </g>
        </svg>
    </div>
    
</section>
<BasicTabs></BasicTabs>
   
   </Container>
  );
}

export default IntroCard;
