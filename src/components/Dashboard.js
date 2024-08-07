import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StatCard from './StatCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import { Icon } from '@mui/material';
import GoalsIcon from '@mui/icons-material/Flag'; // Example icon for Goals
import DishesIcon from '@mui/icons-material/Restaurant'; // Example icon for Popular Dishes
import MenuIcon from '@mui/icons-material/MenuBook'; // Example icon for Menus

function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Orders" value="75" change={3} icon={<GoalsIcon />} color="#4caf50" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Delivered" value="70" change={-3} icon={<DishesIcon />} color="#2196f3" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Cancelled" value="05" change={3} icon={<MenuIcon />} color="#f44336" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Revenue" value="$12k" change={-3} icon={<Icon>attach_money</Icon>} color="#ffeb3b" />
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, backgroundColor: '', color: 'white' }}>
          <ActivityChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, backgroundColor: '', color: 'white' }}>
          <h3><GoalsIcon /> Goals</h3>
          <h3><DishesIcon /> Popular Dishes</h3>
          <h3><MenuIcon /> Menus</h3>
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