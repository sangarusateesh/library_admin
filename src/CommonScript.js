import { IconButton, Typography,Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawee from "./Drawee";
export default function CommonScript() {
  const settings = ['Profile','change_password', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  }
  const usenavigate = useNavigate();
  useEffect(()=>{
    let username = sessionStorage.getItem('username');
    if(username === '' || username === null){
      usenavigate('/');
    }
  },[]);

  return(
    <div>
      <div className="header">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Drawee />
          </Grid>
          <Grid item>
            <IconButton onClick={handleOpenUserMenu}>
              <AccountCircleIcon style={{color:'#fff', fontSize:40}} />
            </IconButton>
          </Grid>
        </Grid>
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
          <MenuItem key={'theme'}>
            <Typography textAlign="center" color={'primary'}>
              Toggle Theme
            </Typography>
          </MenuItem>

          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>    
              <Link to={`/${setting}`} style={{textDecoration:'none',fontSize:20}} >
                <Typography textAlign="center" color={'primary'}>{setting.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}