import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography } from '@mui/material';
import NestedList from './NestedList';
export default function Drawee() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(anchor,open,event.type)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >

    <NestedList />



      {/* <List> */}
      {/* <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography variant='h5' style={{fontWeight:700,marginTop:'10px',marginLeft:'10px'}} color={'primary'}>L Commerce</Typography>
        </ListSubheader>
      }
    > */}
        {/* {['Book Management', 'Student Management', 'Reports'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}

        {/* <ListItem key={'BookManagement'} disablePadding>
          <ListItemButton>
            <ListItemIcon> */}
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            {/* </ListItemIcon>
            <ListItemText primary={'BookManagement'} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem> */}

        {/* <ListItem key={'StudentManagement'}  disablePadding>
          <ListItemButton>
            <ListItemIcon>
            
            </ListItemIcon>
            <ListItemText primary={'StudentManagement'} />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

        </ListItem>

        <ListItem key={'Reports'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            {/* </ListItemIcon> */}
            {/* <ListItemText primary={'Reports'} /> */}
            {/* <List component="div" disablePadding>
              <ListItem className={classes.nested}>
                <ListItemText primary="Subitem 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Subitem 2" />
              </ListItem>
            </List> */}
          {/* </ListItemButton> */}
        {/* </ListItem> */}
      {/* </List> */}
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color:'#fff'}} /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}