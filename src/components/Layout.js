import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
    height: '10vh',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
