import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
//import useStyles from '../utils/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
  },
});

export default function Layout({ children }) {
  const classes = useStyles;
  return (
    <div>
      <Head>
        <title>Next-Commerce</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>N-Commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. N-Commerce</Typography>
      </footer>
    </div>
  );
}
