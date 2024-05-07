import { IconButton, Typography,Button } from "@mui/material";
import React, { useEffect,Link } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function UserMenu() {
  const settings = ['Profile','change_password', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  }
  
  return(
    <div>
      <div className="header">
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