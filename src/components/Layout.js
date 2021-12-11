import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
} from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { spacing } from '@mui/system';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      height: '100vh',
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      backgroundColor: '#f4f4f4',
    },
    title: {
      padding: spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography>Welcome to Ed's Notes</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={classes.drawer}
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant='h6' className={classes.title}>
          Ed's Notes
        </Typography>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.toolbar}></div>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
