import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

export default class BotaoFechar extends React.Component {
    render() {
      return (
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="Fechar" onClick={this.props.fechouCarrinho}>
          <CloseIcon
          sx={{
            color: 'black',
          }}
          />
        </IconButton>
      </Stack>
    );
    }
    
  }