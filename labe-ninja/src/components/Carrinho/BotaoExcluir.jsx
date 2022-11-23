import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



export default class BotaoFechar extends React.Component {
    render() {
      return (
      <Stack direction="row" spacing={1}>
        <IconButton 
        color='primary' 
        aria-label="Fechar" 
        onClick={this.props.excluiItem}
        >
          <DeleteOutlineIcon
          sx={{
            color: '#e47200',
          }}
          />
        </IconButton>
      </Stack>
    );
    }
    
  }