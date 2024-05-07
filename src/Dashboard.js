import { IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommonScript from "./CommonScript";
export default function Dashboard() {
  return(
    <div>
      <CommonScript />
      <Typography textAlign={'center'} my={20} variant="h3" color={'primary'}>Welcome to Dashboard</Typography>
    </div>
  );
}