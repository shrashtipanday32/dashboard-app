import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function StatCard({ title, value, change }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
        <Typography color="textSecondary">
          {change > 0 ? <ArrowUpwardIcon color="success" /> : <ArrowDownwardIcon color="error" />}
          {Math.abs(change)}%
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;
