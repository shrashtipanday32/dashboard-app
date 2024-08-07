import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

const feedback = [
  { id: 1, name: 'Jenny Wilson', rating: 4, comment: 'The food was excellent and so was the service.' },
  { id: 2, name: 'Dianne Russell', rating: 5, comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.' },
  { id: 3, name: 'Elijah Lee', rating: 5, comment: 'Amazing ambience, and the steak was cooked to perfection. Highly recommend!' } // New feedback added
];

// Function to generate a random color
const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function CustomerFeedback() {
  return (
    <>
      <h3>Customer's Feedback</h3>
      <List>
        {feedback.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: getRandomColor(), color: 'white' }}>
                {item.name[0]} {/* Display the first letter */}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <>
                  <Rating value={item.rating} readOnly />
                  <br />
                  {item.comment}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CustomerFeedback;
