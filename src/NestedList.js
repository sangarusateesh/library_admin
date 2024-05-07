import React, { useState,useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {Link, useNavigate} from 'react-router-dom';

export default function NestedList() {
  const usenavigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openBooks, setOpenBooks] = React.useState(false);
  const [openStudent, setOpenStudent] = React.useState(false);
  const handleBooks = () => {
    setOpenBooks(!openBooks);
    setOpenStudent(false);
    setOpen(false);
  };
  const handleStudent = () => {
    setOpen(false);
    setOpenStudent(!openStudent);
    setOpenBooks(false);
  };
  
  const handleClick = () => {
    setOpen(!open);
    setOpenBooks(false);
    setOpenStudent(false);
  };
  const handleNavigate = (id) => {
    console.log(id);
    usenavigate('/'+id);
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography variant="h5" color={'primary'} style={{fontWeight:700,marginTop:'10px'}}>L Commerce </Typography>
        </ListSubheader>
      }
    >
    <ListItemButton  onClick={() => handleNavigate('dashboard')} >
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    {/* <ListItemButton  onClick={() => handleNavigate('qr_code_generator')} >
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="QR Code Generator" />
    </ListItemButton> */}
      
    <ListItemButton onClick={handleBooks}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Book Management" />
      {openBooks ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
      
    <Collapse in={openBooks} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate('new_book')} >
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Add New" />
        </ListItemButton>

        <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate('available_books')}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Available Books" />
        </ListItemButton>
      </List>
    </Collapse>

    <ListItemButton onClick={handleStudent}>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Student Management" />
      {openStudent ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={openStudent} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate('add_student')}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Add New" />
        </ListItemButton>

        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Available Books" />
        </ListItemButton>
      </List>
    </Collapse>

    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Reorts" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigate('book_wise')}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Book Wise Report" />
        </ListItemButton>

        <ListItemButton sx={{ pl: 4 }}  onClick={() => handleNavigate('day_wise')}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Day Wise Report" />
        </ListItemButton>
      </List>
    </Collapse>
  </List>
);
}