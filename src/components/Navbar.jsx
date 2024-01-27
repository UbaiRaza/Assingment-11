import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
  return (
    <AppBar  style={{ color: "Black", backgroundColor: "hsl(0deg 0% 90.2%)" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/site-logo-free-img-1.png" alt="" />
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>

          <a href=""><h1>Home </h1></a>
        </Typography>


        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>

          <a href=""><h1>About </h1></a>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>

          <a href=""><h1>Blog </h1></a>
        </Typography>
        <Typography variant="h6" component="div" sx={{}}>

          <a href=""><h1>contact </h1></a>
        </Typography>


      </Toolbar>
    </AppBar>
  )
}
