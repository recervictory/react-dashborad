import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ColorModeContext, tokens } from '../styles/theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  //console.log(theme.palette.mode)
  return (
  <Box display='flex' justifyContent="space-between" p={2}>
    <Box display='flex'
    borderRadius="3px"
    sx= {{
      backgroundColor: colors.primary[400]
    }}
    >
      <InputBase sx={{ml:2, flex:1}} placeholder="search"/>
    </Box>

    <Box>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? <LightModeIcon />: <Brightness4Icon /> }
      </IconButton>
      <IconButton >
        <WorkHistoryIcon />
      </IconButton>
      <IconButton >
        <ManageAccountsIcon />
      </IconButton>
      <IconButton >
        <AccountCircleIcon />
      </IconButton>
    </Box>
  </Box>
  )
}

export default TopBar