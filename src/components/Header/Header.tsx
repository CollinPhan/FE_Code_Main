import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Link } from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';
import { connection_path } from '../../constants/developments';

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const api_url: string = connection_path.base_url + connection_path.api + connection_path.endpoints.logout;

    const configuration: AxiosRequestConfig = {
      method: 'POST', url: api_url
    };

    try {
      const response = await axios(configuration);
      if (response.status === 200) {
        // Handle successful logout (e.g., clear tokens, redirect to login page)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAuth(false); // Update the auth state to false
      } else {
        alert('Logout failed');
      }
    } catch (error) {
      alert('Logout failed, please try again later.');
      console.error(error);
    }
  };

  return (
    <AppBar position="sticky" style={{ top: 0 }}>
      <Box width='100%' sx={{ backgroundColor: 'white' }}>
        <Toolbar disableGutters>
          <Link href="/"><img src="../../../public/Logo.png" alt="Logo" style={{ height: '70px', marginLeft: '20px' }} /></Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '40%' }}>
            <Button variant="text" href='/for-owner' sx={{ color: ' #00aeeb', fontWeight: 'bold' }}>Dành cho chủ phòng khám</Button>
            <Button variant='text' sx={{ color: ' #00aeeb', fontWeight: 'bold' }}>Tư vấn trực tuyến</Button>
            {auth ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle sx={{ color: 'gray', fontSize: '40px' }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Tài khoản</MenuItem>
                  <MenuItem onClick={() => { handleClose(); handleLogout(); }}>Đăng xuất</MenuItem>
                </Menu>
              </div>
            ) : (
              <Button href='/login' variant='contained' sx={{ color: 'white', borderRadius: '5px' }}>Đăng nhập</Button>
            )}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
