import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next-Commerce</title>
      </Head>
      <AppBar position="static">
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
