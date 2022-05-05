import { useSelector } from 'react-redux';

import TextType from '../TextType';

import Project from './Project';

import { projects_english, projects_spanish } from '../../data/projects-data';
import Grid from '@mui/material/Grid';
type RootState = {
  language: string;
};

const Projects = () => {
  const { language }: any = useSelector<RootState>((state) => state.language);

  const english_project = projects_english.map((p, i) => (
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
  ));

  const spanish_project = projects_spanish.map((p, i) => (
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
  ));

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
          <TextType
            variant="h3"
            align="center"
            firstText="Projects"
            secondText="Proyectos"
          />
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
          ? projects_english.length > 0 && english_project
          : spanish_project}
      </Grid>
    </>
  );
};

export default Projects;
