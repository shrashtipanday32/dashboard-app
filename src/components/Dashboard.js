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
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


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
      <Grid item xs={12} sm={6} md={2}>
        <StatCard
          title="Total Orders"
          value="75"
          change={3}
          icon={<ShoppingBasketIcon sx={iconStyle('#293368', '#3C63FC')} />}
          color="#e8f5e9"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <StatCard
          title="Total Delivered"
          value="70"
          change={-3}
          icon={<LocalMallIcon sx={iconStyle('#175045', '#00C88C')} />}
          color="#e3f2fd"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <StatCard
          title="Total Cancelled"
          value="05"
          change={3}
          icon={<RemoveShoppingCartIcon sx={iconStyle('#5F3237', '#F25E5E')} />}
          color="#ffebee"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <StatCard
          title="Total Revenue"
          value="$12k"
          change={-3}
          icon={<TrendingUpIcon sx={iconStyle('#5B2A4A', '#E8409F')} />}
          color="#fffde7"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Net Profit"
          value="$6754.34"
          change={4}
          icon={<AttachMoneyIcon sx={iconStyle('#195247', '#099870')} />}
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
                <GoalsIcon sx={iconStyle('#5F3237', '#EF6822')} />
                <Box sx={{ ml: 1, color: 'white' }}>Goals</Box>
              </Box>
              <ArrowForwardIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              sx={{ mb: 7, display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: 'left', borderRadius: 0, p: 0 }}
              onClick={() => handleButtonClick('Popular Dishes')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DishesIcon sx={iconStyle('#202028', '#6179DA')} />
                <Box sx={{ ml: 1, color: 'white' }}>Popular Dishes</Box>
              </Box>
              <ArrowForwardIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
              sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: 'left', borderRadius: 0, p: 0 }}
              onClick={() => handleButtonClick('Menus')}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MenuIcon sx={iconStyle('#214A60', '#21AAE9')} />
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
