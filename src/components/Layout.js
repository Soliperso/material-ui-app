import React from 'react';
import { makeStyles } from '@mui/styles';
import { Drawer, Typography } from '@mui/material';

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
    height: '100vh',
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
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant='permanent'
        className={classes.drawer}
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant='h6'>Ed's Notes</Typography>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
