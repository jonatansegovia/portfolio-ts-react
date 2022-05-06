import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import BasicModal from '../BasicModal';
import TextType from '../TextType';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CustomForm from '../CustomForm';

type RootState = {
  language: string;
};

const Contact = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { language }: any = useSelector<RootState>((state) => state.language);

  const handleClose = useCallback((openModal: boolean) => {
    setShowModal(openModal);
  }, []);

  const modal = showModal && (
    <BasicModal
      handleClose={handleClose}
      open={true}
      title={language === 'ENG' ? 'Message Send!' : 'Mensaje Enviado!'}
      text={undefined}
    />
  );

  const title = (
    <TextType
      variant="h3"
      align="center"
      firstText="Contact Me"
      secondText="Contactame"
    />
  );

  const form = <CustomForm language={language} handleModal={handleClose} />;

  return (
    <Container>
      <Grid
        container
        id="contact"
        marginTop="6rem"
        sx={{ height: '80vh' }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} marginBottom="3rem" textAlign="center">
          {title}
        </Grid>
        <Grid item xs={12}>
          {form}
        </Grid>
      </Grid>
      {modal}
    </Container>
  );
};

export default Contact;
