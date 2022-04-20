import Project from './Project';
import * as app from '../../data/projects-data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <Grid container sx={{ marginTop: '5rem', gridGap: '3rem' }}>
      {/*ver si dejo ese gap */}
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Projects
        </Typography>
      </Grid>
      {app.projects &&
        app.projects.map((p) => (
          <Project
            imgLink={p.imgLink}
            appLink={p.appLink}
            title={p.title}
            subheader={p.subheader}
            altText={p.altText}
            shortDescription={p.shortDescription}
            longDescription={p.longDescription}
          />
        ))}
    </Grid>
  );
};

export default Projects;
