import React from 'react'
import Post from './Post';
import { Box } from '@mui/material';

function Feed() {
  return (
      <Box bgcolor='' flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      </Box>
    
  )
}

export default Feed
