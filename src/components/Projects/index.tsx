import Project from './Project';
import * as app from '../../data/projects-data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <>
      <Grid
        id="projects"
        container
        sx={{
          marginTop: '6rem',
          marginBottom: '3rem',
          gridGap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid item>
          <Typography variant="h3" align="center">
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          gridGap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
    </>
  );
};

export default Projects;
