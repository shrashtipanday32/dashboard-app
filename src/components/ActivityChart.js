import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '8', value: 4000 },
  { name: '9', value: 3000 },
  { name: '10', value: 2000 },
  { name: '11', value: 2780 },
  { name: '12', value: 1890 },
  { name: '13', value: 2390 },
  { name: '14', value: 3490 },
];

function ActivityChart() {
  return (
    <>
      <h3>Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default ActivityChart;
