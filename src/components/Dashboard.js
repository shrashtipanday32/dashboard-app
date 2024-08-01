import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StatCard from './StatCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';

function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Orders" value="75" change={3} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Delivered" value="70" change={-3} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Cancelled" value="05" change={3} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Revenue" value="$12k" change={-3} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <ActivityChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <h3>Goals</h3>
          <h3>Popular Dishes</h3>
          <h3>Menus</h3>
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
