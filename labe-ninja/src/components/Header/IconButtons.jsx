import React from 'react';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


export default class IconButtons extends React.Component {
  render() {
    return (
    <Stack direction="row" spacing={1}>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={this.props.clicouCarrinho}>
        <Badge 
        badgeContent={this.props.itensNoCarrinho} 
        color="primary"
        >
          <ShoppingCartIcon
          sx={{
            color: 'black',
          }}
          />
        </Badge>
      </IconButton>
      
    </Stack>
  );
  }
  
}