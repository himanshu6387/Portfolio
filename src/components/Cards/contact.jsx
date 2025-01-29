import React from 'react';
import { motion } from 'framer-motion';
import { Container, TextField, Button, Typography, Box, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  function handleFormSubmit(){
    setOpen(true);
   
   
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <motion.div id='contact'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    ><Divider/>
      <Box sx={{ 
       
        padding: '40px',
        borderRadius: '8px',
       
        textAlign: 'center'
      }}>
        <Typography variant="h4" gutterBottom style={{ color: '#333', fontWeight:600 }}>Get in Touch</Typography>
        <Typography variant="subtitle1" style={{ color: '#555', marginBottom: '20px' }}>
          Feel free to contact me for any inquiries or collaboration opportunities.
        </Typography>
        <Container maxWidth="sm">
          <form action='https://formspree.io/f/xpwqdvpg' method='POST' onSubmit={handleFormSubmit}>
            <TextField
              name='Name'
              label="Your Name"
              fullWidth
              margin="normal"
              variant="outlined"
              color="success"
              required={true}
              InputProps={{ style: { background: '#fff' } }}
            />
            <TextField
              name="Email"
              type='email'
              label="Your Email"
              fullWidth
              margin="normal"
              variant="outlined"
              color="success"
              required={true}
              InputProps={{ style: { background: '#fff' } }}
            />
            <TextField
              name='Message'
              label="Your Message"
              fullWidth
              margin="normal"
              variant="outlined"
              color="success"
              multiline
              rows={4}
              required={true}
              InputProps={{ style: { background: '#fff' } }}
              
            />
           <Button type="submit" variant='filled'  size='large' sx={{border:'1px solid grey', borderRadius:"20px", fontWeight:"5s00", marginTop:"20px"}}>Submit</Button>
          </form>
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px', gap: "auto", flexWrap:'wrap'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '30px' }}>
            <EmailIcon style={{ color: '#333', marginRight: '5px' }} />
            <Typography variant="subtitle2" style={{ color: '#555' }}>anubhavtiwari0007@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '30px' }}>
            <PhoneIcon style={{ color: '#333', marginRight: '5px' }} />
            <Typography variant="subtitle2" style={{ color: '#555' }}>+91-9336485251</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon style={{ color: '#333', marginRight: '5px' }} />
            <Typography variant="subtitle2" style={{ color: '#555' }}>India</Typography>
          </Box>
          
        </Box>
        <div>
      
          <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
            <Alert
             onClose={handleClose}
             severity="success"
             variant="filled"
             sx={{ width: '100%' }}
            >
             Message has been sent Successfully!
           </Alert>
          </Snackbar>
        </div>
      </Box>
      
    </motion.div>
  );
};

export default Contact;
