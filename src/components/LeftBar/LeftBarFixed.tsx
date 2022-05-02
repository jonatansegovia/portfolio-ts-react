import { useSelector } from 'react-redux';

import { Scrollchor } from 'react-scrollchor';

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

type RootState = {
  darkTheme: boolean | undefined;
};

export default function LeftBarFixed() {
  const { darkTheme }: any = useSelector<RootState>((state) => state.darkTheme);

  const onHover = darkTheme
    ? s['leftBarIcons-bg-dark']
    : s['leftBarIcons-bg-light'];

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
            <Scrollchor to="#home">
              <HomeRounded
                className={onHover}
                fontSize="large"
                titleAccess="Home"
                color="secondary"
              />
            </Scrollchor>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Scrollchor to="#about">
              <FaceIcon
                className={onHover}
                fontSize="large"
                titleAccess="About Me"
                color="secondary"
              />
            </Scrollchor>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Scrollchor to="#projects">
              <FolderOpenIcon
                className={onHover}
                fontSize="large"
                titleAccess="Projects"
                color="secondary"
              />
            </Scrollchor>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Scrollchor to="#contact">
              <MailOutlineIcon
                className={onHover}
                fontSize="large"
                titleAccess="Contact Me"
                color="secondary"
              />
            </Scrollchor>
          </ListItemIcon>
        </List>
        <Divider />
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="https://github.com/jonatansegovia">
              <GitHubIcon
                className={onHover}
                fontSize="large"
                titleAccess="GitHub Profile"
                color="secondary"
              />
            </Link>
          </ListItemIcon>
        </List>
        <List>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <Link href="https://www.linkedin.com/in/jonatan-segovia-dev/">
              <LinkedInIcon
                className={onHover}
                fontSize="large"
                titleAccess="Linkedin Profile"
                color="secondary"
              />
            </Link>
          </ListItemIcon>
        </List>
      </List>
    </Box>
  );
}
