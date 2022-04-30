import { useSelector } from 'react-redux';

import {
  english_presentation,
  spanish_presentation,
} from '../../data/presentation';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type RootState = {
  language: string;
};

const About = () => {
  const { language }: any = useSelector<RootState>((state) => state.language);

  return (
    <Container>
      <Grid container marginTop="6rem" id="about">
        <Grid item>
          <Typography variant="h3" align="center">
            {language === 'ENG' ? 'About Me' : 'Sobre mí'}
          </Typography>
          <Box marginTop="1.8rem">
            <Typography align="center" fontSize="1.3rem">
              {language === 'ENG' ? english_presentation : spanish_presentation}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
