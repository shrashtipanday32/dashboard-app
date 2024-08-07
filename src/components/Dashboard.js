import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StatCard from './StatCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import GoalsIcon from '@mui/icons-material/Flag';
import DishesIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/MenuBook';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function Dashboard() {
  const iconStyle = (bgColor, iconColor) => ({
    borderRadius: '50%',
    backgroundColor: bgColor,
    color: iconColor,
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    // Remove hover effect by default
    '&:hover': {
      backgroundColor: bgColor,
      color: iconColor,
    },
  });

  const handleButtonClick = (page) => {
    alert(`Navigating to ${page}`); // Replace with actual navigation logic
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Orders"
          value="75"
          change={3}
          icon={<GoalsIcon sx={iconStyle('#1e88e5', '#ffffff')} />}
          color="#e8f5e9"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Delivered"
          value="70"
          change={-3}
          icon={<DishesIcon sx={iconStyle('#00c853', '#ffffff')} />}
          color="#e3f2fd"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Cancelled"
          value="05"
          change={3}
          icon={<MenuIcon sx={iconStyle('#d50000', '#ffffff')} />}
          color="#ffebee"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Revenue"
          value="$12k"
          change={-3}
          icon={<AttachMoneyIcon sx={iconStyle('#ffd600', '#ffffff')} />}
          color="#fffde7"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, backgroundColor: '#121212', color: 'white' }}>
          <ActivityChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, backgroundColor: '#121212', color: 'white' }}>
          <Box>
            <IconButton
              sx={{ mb: 7, display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: 'left', borderRadius: 0, p: 0 }}
              onClick={() => handleButtonClick('Goals')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <GoalsIcon sx={iconStyle('#1e88e5', '#ffffff')} />
                <Box sx={{ ml: 1, color: 'white' }}>Goals</Box>
              </Box>
              <ArrowForwardIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              sx={{ mb: 7, display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: 'left', borderRadius: 0, p: 0 }}
              onClick={() => handleButtonClick('Popular Dishes')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DishesIcon sx={iconStyle('#00c853', '#ffffff')} />
                <Box sx={{ ml: 1, color: 'white' }}>Popular Dishes</Box>
              </Box>
              <ArrowForwardIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: 'left', borderRadius: 0, p: 0 }}
              onClick={() => handleButtonClick('Menus')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MenuIcon sx={iconStyle('#d50000', '#ffffff')} />
                <Box sx={{ ml: 1, color: 'white' }}>Menus</Box>
              </Box>
              <ArrowForwardIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <RecentOrders />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <CustomerFeedback />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
