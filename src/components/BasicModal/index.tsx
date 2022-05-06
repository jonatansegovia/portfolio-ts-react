import React from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type props = {
  open: boolean;
  handleClose: (openModal: boolean) => any;
  title: string;
  text: string | undefined;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props: props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <CheckCircleOutlineIcon
            fontSize="large"
            sx={{ textAlign: 'center', color: 'limegreen' }}
          />
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            align="center"
          >
            {props.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >
            {props?.text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default React.memo(BasicModal);
