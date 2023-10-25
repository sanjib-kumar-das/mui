import * as React from 'react';
import {Box, Container, Stack, ThemeProvider, colors, createTheme} from '@mui/material'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Add from './components/Add';


function App() {
  const [mode, setMode] = React.useState("dark")
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box className="App" bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>   
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
