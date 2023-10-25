import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (    
      <Box bgcolor='' flex={2} p={1} sx={{display:{xs:"none", sm:"block"}}}>
        <Box position="fixed">
          right bar content goes here
        </Box>
      </Box>
  )
}

export default Rightbar
