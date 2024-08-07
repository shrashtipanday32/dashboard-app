import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';

const rows = [
  { id: 1, customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { id: 2, customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
  { id: 3, customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
];

function RecentOrders() {
  // Function to generate a random color
  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <h3>Recent Orders</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Initial</TableCell> {/* New header for initials */}
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar sx={{ bgcolor: getRandomColor(), color: 'white' }}>
                  {row.customer[0]} {/* Display the first letter */}
                </Avatar>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default RecentOrders;
