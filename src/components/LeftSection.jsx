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
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import TelegramIcon from '@mui/icons-material/Telegram';

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, url:'https://www.google.com' },
    { text: 'Trending', icon: <TrendingUpIcon />, url:'https://www.google.com'  },
    { text: 'Snippet', icon: <CodeIcon />, url:'https://www.google.com'  },
    { text: 'Video', icon: <VideoLibraryIcon />, url:'https://www.google.com'  }
  ];

  const socialItems = [
    { text: 'LinkedIn', icon: <LinkedInIcon />, url:'https://www.linkedin.com/iamanubhav7/'  },
    { text: 'GitHub', icon: <GitHubIcon /> ,url:'https://github.com/hrxdavidmac7' },
    { text: 'YouTube', icon: <YouTubeIcon />, url:'https://www.google.com'  },
    { text: 'LeetCode', icon: <CodeIcon /> , url:'https://www.google.com' },
    { text: 'Telegram', icon: <TelegramIcon />,url:'https://www.google.com'  }
  ];

  return (
    <div className="portfolio">
      <div className="left-section" >
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
                  <a href={item.url} style={{ textDecoration: 'none', color: 'inherit', width:'100%' }}>
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
            <Typography variant="subtitle2" gutterBottom sx={{ mt: 2, ml: 2 }}>
              <h3>Social</h3>
            </Typography>
            <List>
              {socialItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding>
                  <a href={item.url} style={{ textDecoration: 'none', color: 'inherit', width:'100%' }}>
                    <ListItemButton>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <Divider orientation="vertical" flexItem sx={{ width: '1px',  marginRight: '5px' }} />
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
    </div>
  );
}
