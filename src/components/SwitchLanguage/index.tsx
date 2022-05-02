import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { switchLanguage } from '../../redux/reducer/language';

import { link_arg_icon, link_us_icon } from '../../utils/links';

import Grid from '@mui/material/Grid';
import Button from '@material-ui/core/Button';

type RootState = {
  language: string;
};

const SwitchLanguage = () => {
  const { language }: any = useSelector<RootState>((state) => state.language);

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item marginTop="8px">
        <Button
          onClick={() => {
            if (language === 'ENG') dispatch(switchLanguage('SPA'));
            if (language === 'SPA') dispatch(switchLanguage('ENG'));
          }}
        >
          <img
            src={language === 'ENG' ? link_us_icon : link_arg_icon}
            alt={
              language === 'ENG'
                ? 'English language Icon'
                : 'Spanish language Icon'
            }
            style={{ width: '30px', borderRadius: '50%', fontWeight: 'bold' }}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SwitchLanguage;
