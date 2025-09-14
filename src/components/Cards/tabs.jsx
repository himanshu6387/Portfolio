import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Paper from '@mui/material/Paper';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CertificateIcon from '@mui/icons-material/VerifiedUser';
import { TimelineDot } from '@mui/lab';
import { Divider } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="About me" style={{ fontSize: '18px', fontWeight: 700 }}{...a11yProps(0)} />
          <Tab label="Position of Responsibility" {...a11yProps(1)} style={{ fontSize: '18px', fontWeight: 700 }} />
          <Tab label="Certificates" {...a11yProps(2)} style={{ fontSize: '18px', fontWeight: 700 }} color='red' />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{ textAlign: 'left', color: "#404040", fontFamily: 'inherit' }} className='text-intro'>
          <div style={{ marginBottom: '10px' }}>Hii, I'm Himanshu Mishra.</div>
          <div style={{ marginBottom: '10px' }}>I'm an experienced and passionate Software Engineer.</div>

          <div style={{ marginBottom: '10px' }}>
            Currently, I am working as an <strong style={{ color: "#525252" }}>Associate Software Engineer</strong> at
            <strong style={{ color: "#525252" }}> The Smart Bridge Pvt. Ltd.</strong>, where I contribute to building efficient,
            scalable, and impactful solutions while continuously enhancing my technical expertise.
          </div>

          <div style={{ marginBottom: '10px' }}>
            Previously, I worked for <strong style={{ color: "#525252" }}>1.5 years</strong> at
            <strong style={{ color: "#525252" }}> Hanumant Technology Pvt. Ltd.</strong> as a
            <strong style={{ color: "#525252" }}> MERN Stack Developer</strong>, where I gained extensive hands-on experience in
            developing dynamic web applications, optimizing performance, and working across the full stack to deliver
            client-focused solutions.
          </div>

          <div style={{ marginBottom: '10px' }}>
            I graduated with my <strong style={{ color: "#525252" }}>Bachelor of Technology in Information Technology</strong>
            from Dr. A.P.J. Abdul Kalam Technical University in Lucknow, 2024.
          </div>

          <div style={{ marginBottom: '10px' }}>
            I love working on exciting products and value learning and growing with people, teams, and technologies.
            As an intellectually curious, competent, and motivated professional, I strive to write high-quality software
            that adheres to best practices, meets project requirements, and drives innovation.
          </div>

          <div style={{ marginBottom: '10px' }}>
            Always eager to learn and explore new technologies, I look forward to working in collaborative team environments
            and contributing to impactful projects.
          </div>

          <div>
            Additionally, I completed my <strong style={{ color: "#525252" }}>internship</strong> at
            <strong style={{ color: "#525252" }}> Synclovis Software Systems Pvt. Ltd.</strong> as a
            <strong style={{ color: "#525252" }}> MERN Developer Intern</strong>, where I built a strong foundation
            in full-stack development and gained practical exposure to real-world projects.
          </div>
        </div>

        <Divider />
      </CustomTabPanel>


      <CustomTabPanel value={value} index={1}>
        <Timeline align="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h1">
                  Microsoft Student Ambassador
                </Typography>
                <Typography>Sep 2023 - Present</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h1">
                  Software Management
                </Typography>
                <Typography>Aug 2023 - Dec 2023</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline><Divider />

      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Timeline align="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CertificateIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h1">
                  MongoDB Certified Associate Developer 
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CertificateIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h1">
                  Full Stack Certified Developer
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CertificateIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h1">
                   Java Certified Developer
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline><Divider />
      </CustomTabPanel>
    </Box>
  );
}
