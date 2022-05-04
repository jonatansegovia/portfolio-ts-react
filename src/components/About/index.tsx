import TextType from '../TextType';

import {
  english_presentation,
  spanish_presentation,
} from '../../data/presentation';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container>
      <Grid container marginTop="6rem" id="about" textAlign="center">
        <Grid item>
          <TextType
            variant="h3"
            align="center"
            firstText="About Me"
            secondText="Sobre mí"
          />
          <Box marginTop="1.8rem" textAlign="center">
            <TextType
              component="h5"
              align="center"
              firstText={english_presentation}
              secondText={spanish_presentation}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
