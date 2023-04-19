import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import Bar from './components/Bar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Rightbar from './components/Rightbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box display="flex" flexDirection="column">
      <Bar></Bar>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={4}>
          <Content></Content>
        </Grid>
        <Grid item xs={4}>
          <Rightbar></Rightbar>
        </Grid>
      </Grid>
    </Box>

  )
}

export default App
