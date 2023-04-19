import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function MyNav() {
  return (
    <div className="Navbar">
        <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default MyNav;
