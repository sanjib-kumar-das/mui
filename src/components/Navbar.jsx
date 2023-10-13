import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HikingIcon from '@mui/icons-material/Hiking';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

function Navbar() {
  
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>SocioHike</Typography>
        <HikingIcon sx={{display:{xs:"block",sm:"none"}}}/>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
