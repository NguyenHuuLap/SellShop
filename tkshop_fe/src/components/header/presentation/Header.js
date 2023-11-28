import * as React from 'react';

import{AppBar, Box, Toolbar, Typography, Badge, Container, Button, Avatar}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


import { ShoppingCart, AccountCircle} from '@mui/icons-material';
import SearchButton from '../components/Search';
import { alpha } from '@mui/system';
import { useSelector } from 'react-redux';
// import { async } from 'q';
// import axios from 'axios';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import axios from 'axios';



const Header = () => {  
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const navigate  = useNavigate();
  const handleOnClick = async() =>{
    if(isAuthenticated){
      navigate('/profile', { state: { user: user } })
    }
    else{
      navigate('/login')
    }
  }

  const handleClickCart = async()=>{
    navigate('/cart');
  }

  return (
      <AppBar position="static" sx={{ backgroundColor: '#1976d2'}}>
        <Container>
          <Toolbar sx={{width: '1200px'}}>
          <Typography variant="h6" component="div" sx={{ width: '150px'}}>
            Logo
          </Typography> 
          <Box sx={{width: 'auto',backgroundColor: alpha('#FFFFFF', 0.1), borderRadius: '10px'}}>
            <center>
            <Button sx={{color:"inherit",textTransform: 'none'}}>
                <MenuIcon sx={{ marginRight: '5px' }} />
                <span style={{ fontSize: '14px' }}>Danh mục</span>
            </Button>
            </center>
          </Box>

          {/* Search*/}
          <center><SearchButton sx={{ marginRight: '5px',}}/></center>

          {/* Giỏ hàng */}
          <Box sx={{width: 'auto',backgroundColor: alpha('#FFFFFF', 0.1), borderRadius: '10px', marginLeft:'12px'}}>
            <center>
            <Button type='button' onClick={handleClickCart} sx={{color:"inherit", textTransform: 'none'}}>
              <Badge badgeContent={4} color="error" sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }}>
                <ShoppingCart />
              </Badge>
              <span style={{ fontSize: '14px', }}>Giỏ hàng</span>
            </Button>
            </center>
          </Box>
          

          {/* Accounts */}
          <Box sx={{width: 'auto',backgroundColor: alpha('#FFFFFF', 0.1), borderRadius: '10px', marginLeft:'12px',}}>
            <center>
              <Button type='button' onClick={handleOnClick} sx={{color:"inherit", textTransform: 'none'}}>
                <Avatar src={user?.avatar} sx={{height:'30px', width:'30px', marginRight:'5px'}} />
                <span style={{ fontSize: '14px',}}  >{isAuthenticated ? user?.firstname : `Đăng nhập`}</span>
              </Button>
            </center>
          </Box>
          
          </Toolbar>
        </Container>
      </AppBar>
  );
}
export default Header;