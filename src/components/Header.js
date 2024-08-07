import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Dashboard
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2, // Gap between the search bar and icons
            marginLeft: 2 // Adds space between the dashboard heading and the search bar/icons
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search…"
            sx={{ 
              backgroundColor: 'black', 
              borderRadius: 1,
              width: 200, // Adjust width as needed
              '& .MuiOutlinedInput-root': {
                padding: '0 8px' // Adjust padding to fit the search icon properly
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#1e88e5', // Background color for the circle
                color: 'white', // Text color
                fontWeight: 'bold', // Text weight
                fontSize: '16px', // Font size
              }}
            >
              SP
            </Avatar>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
