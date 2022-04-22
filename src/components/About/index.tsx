import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container>
      <Grid container marginTop="5rem" id="about">
        <Grid item>
          <Typography variant="h3" align="center">
            About Me
          </Typography>
          <Box marginTop="1.8rem">
            <Typography align="center" fontSize="1.3rem">
              I always say that all my life I was being prepared for this
              moment. Why? because all the experience that I acquired across
              years, leading and sharing with big groups, turned me into an
              empathetic person who can get involved with people's needs and can
              adapt to different situations. Programming allows me to use these
              skills to achieve goals in more efficient and entertaining ways. I
              hope to find a place where these skills can be developed in-depth
              and people are valued above all else.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
