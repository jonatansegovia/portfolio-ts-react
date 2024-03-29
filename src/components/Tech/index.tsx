import { ReactComponent as ReactIcon } from '../../utils/img/react.svg';
import { ReactComponent as JSIcon } from '../../utils/img/javascript.svg';
import { ReactComponent as TSIcon } from '../../utils/img/typescript.svg';
import { ReactComponent as ReduxIcon } from '../../utils/img/redux.svg';
import { ReactComponent as HtmlIcon } from '../../utils/img/html.svg';
import { ReactComponent as CssIcon } from '../../utils/img/css.svg';
import { ReactComponent as MuiIcon } from '../../utils/img/mui.svg';
import { ReactComponent as GitIcon } from '../../utils/img/git.svg';
import { ReactComponent as GitHubIcon } from '../../utils/img/github.svg';
import { ReactComponent as SourceIcon } from '../../utils/img/sourcetree.svg';
import { ReactComponent as PostManIcon } from '../../utils/img/postman.svg';
import { ReactComponent as NodeIcon } from '../../utils/img/node.svg';
import { ReactComponent as PostgressIcon } from '../../utils/img/postgresql.svg';
import { ReactComponent as ExpressIcon } from '../../utils/img/express.svg';
import { ReactComponent as HerokuIcon } from '../../utils/img/heroku.svg';
import { ReactComponent as ScrumIcon } from '../../utils/img/scrum.svg';
import { ReactComponent as TrelloIcon } from '../../utils/img/trello.svg';

import TextType from '../TextType';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import s from './index.module.css';

const Tech = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        marginTop='6rem'
      >
        <TextType
          variant='h3'
          align='center'
          firstText='Technologies'
          secondText='Tecnologías'
        />
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        marginTop='1.8rem'
        id='big-container'
      >
        <Grid item xs={3} id='tech-img'>
          <ReactIcon className='icon' title='React' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <JSIcon className='icon' title='Javascript' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <TSIcon className='icon' title='Typescript' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <ReduxIcon className='icon' title='Redux' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <HtmlIcon className='icon' title='HTML5' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <CssIcon className='icon' title='CSS3' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <MuiIcon className='icon' title='Material UI' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <GitIcon className='icon' title='Git' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <GitHubIcon className='icon' title='GitHub' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <SourceIcon className='icon' title='SourceTree' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <PostManIcon className='icon' title='Postman' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <NodeIcon className='icon' title='Node' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <PostgressIcon className='icon' title='PostgreSQL' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <ExpressIcon className='icon icon-bg' title='Express' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <HerokuIcon className='icon' title='Heroku' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <ScrumIcon className='icon' title='Scrum' />
        </Grid>
        <Grid item xs={3} id='tech-img'>
          <TrelloIcon className='icon icon-bg' title='Trello' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tech;
