import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HikingIcon from '@mui/icons-material/Hiking';

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>SocioHike</Typography>
        <HikingIcon sx={{display:{xs:"block",sm:"none"}}}/>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
