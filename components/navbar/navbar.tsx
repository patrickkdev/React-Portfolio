import { GitHub, WhatsApp } from '@mui/icons-material';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react'
import StyledDiv from '../styled-div/styled-div';
import ReactIcon from '../icons/react';

const Navbar = () => {
  return (
    <Box sx={{bgcolor: 'background.paper'}}>
      <Container maxWidth="lg" sx={{padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          <Typography><strong>Patrick&nbsp;</strong>Ferreira</Typography>
          Desenvolvedor
        </div>
        <Stack direction="row" spacing={4} divider={<Divider orientation='vertical' flexItem />}>
          <Button href='https://github.com/patrickkdev'  target="_blank" color="inherit" endIcon={<GitHub />}>GitHub</Button>
        </Stack>
      </Container>
      <Divider orientation='horizontal' sx={{width: '100%'}}/>
    </Box>
  )
}

export default Navbar