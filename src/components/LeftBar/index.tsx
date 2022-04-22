import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeRounded from '@mui/icons-material/HomeRounded';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotesIcon from '@mui/icons-material/Notes';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import FaceIcon from '@mui/icons-material/Face';
import Divider from '@mui/material/Divider';

type Anchor = 'left';

export default function LeftBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: 80,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ position: 'fixed', top: 0, left: 0 }}
          >
            <Grid>
              <NotesIcon fontSize="large" />
            </Grid>
          </Button>
          <Drawer open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
