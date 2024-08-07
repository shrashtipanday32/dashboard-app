import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// const data = [
//   { name: '8', value: 4000 },
//   { name: '9', value: 3000 },
//   { name: '10', value: 2000 },
//   { name: '11', value: 2780 },
//   { name: '12', value: 1890 },
//   { name: '13', value: 2390 },
//   { name: '14', value: 3490 },
//   { name: '11', value: 2780 },
//   { name: '12', value: 1890 },
//   { name: '13', value: 2390 },
//   { name: '14', value: 3490 },
//   { name: '10', value: 2000 },
//   { name: '11', value: 2780 },
//   { name: '12', value: 1890 },
//   { name: '13', value: 2390 },
//   { name: '14', value: 3490 },
// ];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [];

for (let i = 0; i < 50; i++) {
  data.push({
    name: getRandomInt(5, 20).toString(),
    value: getRandomInt(0, 4000),
  });
}

const styles = {
  container: {
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#1e1e1e', // Dark background color
    marginBottom: '16px',
    position: 'relative'
  },
  heading: {
    marginBottom: '16px',
    fontSize: '1.5rem',
    color: '#fff', // White color for heading
    fontWeight: '500'
  },
  tooltip: {
    backgroundColor: '#fff', // White background for tooltip
    color: '#333',
    borderRadius: '4px',
    padding: '8px',
    fontSize: '0.875rem'
  },
  xAxis: {
    fontSize: '0.875rem',
    color: '#ccc' // Light color for x-axis
  },
  yAxis: {
    fontSize: '0.875rem',
    color: '#ccc' // Light color for y-axis
  },
  selectContainer: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: '#1e1e1', // Dark background for select container
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1
  },
  select: {
    minWidth: '120px',
    backgroundColor: '#333', // Dark background for select
    borderRadius: '4px',
    '& .MuiSelect-select': {
      padding: '10px 24px 10px 12px',
      fontSize: '0.875rem',
      color: '#fff' // White text color for select
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
  },
  icon: {
    color: '#fff', // White color for dropdown icon
    right: '8px'
  },
  menuItem: {
    fontSize: '0.875rem',
    color: '#fff' // Dark color for menu items
  }
};

function ActivityChart() {
  const [chartType, setChartType] = useState('bar'); // Default to Bar Chart

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Activity</h3>
      <FormControl variant="outlined" sx={styles.selectContainer}>
        <InputLabel id="chart-type-select-label" sx={{ color: '#fff' }}></InputLabel>
        <Select
          labelId="chart-type-select-label"
          id="chart-type-select"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          label="Chart Type"
          sx={styles.select}
          IconComponent={(props) => <ArrowDropDownIcon {...props} sx={styles.icon} />} // Custom icon for dropdown
        >
          <MenuItem value="bar" sx={styles.menuItem}>Weekly</MenuItem>
          <MenuItem value="line" sx={styles.menuItem}>Monthly</MenuItem>
        </Select>
      </FormControl>
      <ResponsiveContainer width="100%" height={200}>
        {chartType === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" /> {/* Darker grid color */}
            <XAxis dataKey="name" style={styles.xAxis} />
            <YAxis style={styles.yAxis} />
            <Tooltip contentStyle={styles.tooltip} />
            <Bar 
              dataKey="value" 
              fill="#8884d8" 
              radius={[10, 10, 0, 0]} // Rounded corners for bars (top-left and top-right)
            />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" /> {/* Darker grid color */}
            <XAxis dataKey="name" style={styles.xAxis} />
            <YAxis style={styles.yAxis} />
            <Tooltip contentStyle={styles.tooltip} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8884d8" 
              strokeWidth={2} 
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;
