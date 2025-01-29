import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from 'react';
import RightSection from './RightSection'; 

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, url: '#home' },
    { text: 'Trending', icon: <TrendingUpIcon />, url: '#trending' },
    { text: 'Snippet', icon: <CodeIcon />, url: '#snippet' },
    { text: 'Video', icon: <VideoLibraryIcon />, url: '#video' }
  ];

  const socialItems = [
    { text: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/himanshu-mishra-1a4731221' },
    { text: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/himanshu6387' },
    { text: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/share/19uA6sPwGq/' },
    { text: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/himanshu.mishra1?igsh=MXFpbThqMDl6MTd3OA==' },
    { text: 'Telegram', icon: <TelegramIcon />, url: 'http://t.me/Himanshu63877' }
  ];

  const handleMenuItemClick = (url) => {
    setSelectedMenuItem(url);
  };

  return (
    <div className="portfolio">
      <div className="left-section">
        <div className="card">
          <CssBaseline />
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                marginLeft: '20px',
                marginTop: '40px',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Typography variant="h6" gutterBottom component="div" sx={{ textAlign: 'center', mt: 6 }}>

            </Typography>

            <List>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding>
                    <a href={item.url} onClick={() => handleMenuItemClick(item.url)} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                      <ListItemButton>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <Divider orientation="vertical" flexItem sx={{ width: '1px', marginRight: '5px' }} />
                        <ListItemText primary={item.text} sx={{ marginLeft: '10px' }} />
                      </ListItemButton>
                    </a>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
            <Divider />
            <Typography gutterBottom sx={{ mt: 2, ml: 2, fontSize: 18, fontWeight: 600, color: '#424242' }}>
              Social
            </Typography>
            <List>
              {socialItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding>
                    <a href={item.url} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                      <ListItemButton>
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <Divider orientation="vertical" flexItem sx={{ width: '1px', marginRight: '5px' }} />
                        <ListItemText primary={item.text} sx={{ marginLeft: '10px' }} />
                      </ListItemButton>
                    </a>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Drawer>
        </div>
      </div>
      <RightSection selectedMenuItem={selectedMenuItem} /> 
    </div>
  );
}
