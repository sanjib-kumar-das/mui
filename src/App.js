import * as React from 'react';
import {Box, Container, Stack} from '@mui/material'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';


function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>   
      </Stack>
    </Box>
  );
}

export default App;
