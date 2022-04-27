import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeRounded from '@mui/icons-material/HomeRounded';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from '@mui/material/Link';
import FaceIcon from '@mui/icons-material/Face';
import Divider from '@mui/material/Divider';

import s from './LeftBarFixed.module.css';

export default function LeftBarFixed() {
  return (
    <Box
      className={s['leftBar-fixed']}
      sx={{
        position: 'fixed',
        width: 80,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      role="presentation"
    >
      <List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="#home">
              <HomeRounded fontSize="large" titleAccess="Home" />
            </Link>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="#about">
              <FaceIcon fontSize="large" titleAccess="About Me" />
            </Link>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="#projects">
              <FolderOpenIcon fontSize="large" titleAccess="Projects" />
            </Link>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="#contact">
              <MailOutlineIcon fontSize="large" titleAccess="Contact Me" />
            </Link>
          </ListItemIcon>
        </List>
        <Divider />
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="https://github.com/jonatansegovia">
              <GitHubIcon fontSize="large" titleAccess="GitHub Profile" />
            </Link>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="https://www.linkedin.com/in/jonatan-segovia-dev/">
              <LinkedInIcon fontSize="large" titleAccess="Linkedin Profile" />
            </Link>
          </ListItemIcon>
        </List>
      </List>
    </Box>
  );
}
