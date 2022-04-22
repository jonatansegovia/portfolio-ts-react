import Project from './Project';
import * as app from '../../data/projects-data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <Grid container id="projects" sx={{ marginTop: '5rem', gridGap: '3rem' }}>
      {/*ver si dejo ese gap */}
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Projects
        </Typography>
      </Grid>
      {app.projects.length > 0 &&
        app.projects.map((p, i) => (
          <Project
            key={`${p.title} + ${i}`}
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
