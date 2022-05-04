import TextType from '../TextType';

import {
  english_presentation,
  spanish_presentation,
} from '../../data/presentation';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const About = () => {
  const title = (
    <TextType
      variant="h3"
      align="center"
      firstText="About Me"
      secondText="Sobre mí"
    />
  );

  const paragraph = (
    <TextType
      component="h5"
      align="center"
      firstText={english_presentation}
      secondText={spanish_presentation}
    />
  );

  return (
    <Container>
      <Grid container marginTop="6rem" id="about" textAlign="center">
        <Grid item>
          {title}
          <Box marginTop="1.8rem" textAlign="center">
            {paragraph}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
