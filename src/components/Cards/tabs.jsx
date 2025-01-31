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
          <div style={{ marginBottom: '10px' }}>I'm an Experienced Graduated Software Engineer.</div>
          <div style={{ marginBottom: '10px' }}>
            With <strong style={{ color: "#525252" }}>6 months of hands-on experience</strong> as a MERN Developer at
            <strong style={{ color: "#525252" }}> Synclovis Software Pvt. Ltd.</strong>, I honed my skills in full-stack development,
            building scalable applications with modern technologies.
          </div>
          <div style={{ marginBottom: '10px' }}>
            Currently, I am working as a <strong style={{ color: "#525252" }}>MERN Developer</strong> at
            <strong style={{ color: "#525252" }}> Hanumant Technology Pvt. Ltd.</strong>, contributing to dynamic projects,
            optimizing performance, and constantly innovating to deliver impactful solutions.
          </div>

          <div style={{ marginBottom: '10px' }}>I graduated with my <strong style={{ color: "#525252" }}>Bachelor of Technology in Information Technology</strong> from Dr. A.P.J. Abdul Kalam Technical University in Lucknow, 2024.</div>
          <div style={{ marginBottom: '10px' }}>I love working on exciting products and value learning and growing with people, teams, and technologies. As an intellectually curious, competent, and motivated professional, I am on a lookout for new and exciting opportunities.</div>
          <div>I’ve written code in a high-paced and challenging environment with an emphasis on using best practices to develop high-quality software that meets project requirements, budget, and schedule. As a keen learner, I possess new and innovative ideas and look forward to working in a great team environment, experiencing and adapting to new technologies and advancements on the go.</div>
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
                  IIT Bombay Campus Ambassador
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
                  Microsoft Azure Ai 900 Certified
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
                  Oracle Cloud Data Management Certified
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
                  Java Developer Certified
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline><Divider />
      </CustomTabPanel>
    </Box>
  );
}
