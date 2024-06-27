import { AppBar, Toolbar, styled, Box } from '@mui/material'
import React from 'react'
import NetflixLogo from '../assets/NetflixLogo.png'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const Navbar = () => {
  return (
    <AppBar position="absolute" color="transparent" border="none">
        <StyledToolbar>
        <Box
            component="img"
            sx={{
                height: 73,
                width: 150,
            }}
            alt="Netflix Logo."
            src={NetflixLogo}
            />
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar