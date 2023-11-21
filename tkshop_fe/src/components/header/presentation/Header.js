import * as React from 'react';

import{AppBar, Box, Toolbar, Typography, Badge, Container, Button}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


import { ShoppingCart, AccountCircle} from '@mui/icons-material';
import SearchButton from '../components/Search';
import { alpha } from '@mui/system';
import { useSelector } from 'react-redux';
import { async } from 'q';
import axios from 'axios';



const Header = () => {
  const [username, setUsername] = React.useState('');
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/user/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsername(response.data.firstname);
      } catch (err) {
        console.log('Err: ', err);
      }
    };
    fetchData();
  }, [token]);
  return (
      <AppBar position="static" sx={{ backgroundColor: '#1976d2'}}>
        <Container>
          <Toolbar sx={{width: '1200px'}}>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography> */}
            

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
            <Button sx={{color:"inherit", textTransform: 'none'}}>
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
              <Button sx={{color:"inherit", textTransform: 'none'}}>
                <AccountCircle sx={{ fontSize: '24px',}} />
                <span style={{ fontSize: '14px',}}>{username ? username : 'Đăng nhập'}</span>
            </Button>
            </center>
          </Box>
          
          </Toolbar>
        </Container>
      </AppBar>
  );
}
export default Header;