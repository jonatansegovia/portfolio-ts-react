import { useSelector } from 'react-redux';

import Project from './Project';
import { projects_english, projects_spanish } from '../../data/projects-data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type RootState = {
  language: string;
};

const Projects = () => {
  const { language }: any = useSelector<RootState>((state) => state.language);

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
            {language === 'ENG' ? 'Projects' : 'Proyectos'}
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
        {language === 'ENG'
          ? projects_english.length > 0 &&
            projects_english.map((p, i) => (
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
            ))
          : projects_spanish.map((p, i) => (
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
