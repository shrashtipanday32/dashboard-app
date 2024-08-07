import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 60;

const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      overflow: 'hidden', // Prevent scrollbar
      display: 'flex',
      flexDirection: 'column', // Align items vertically
      alignItems: 'center', // Center items horizontally
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    width: '100%', // Make ListItem take full width
    padding: '16px 0', // Adjust padding for better spacing
  },
  iconContainer: {
    minWidth: '40px',
    display: 'flex',
    justifyContent: 'center', // Center icon within container
  },
  logoutItem: {
    marginTop: 'auto', // Push logout icon to the bottom
    width: '100%', // Make logout item take full width
  },
};
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
function Sidebar() {
  return (
    <Drawer
      sx={styles.drawer}
      variant="permanent"
      anchor="left"
    >
      <List>
        {['We Developer', 'Dashboard', 'Analytics', 'Orders', 'Menu'].map((text, index) => (
          <Tooltip title={text} placement="right" arrow key={text}>
            <ListItem button style={styles.menuItem}>
              <ListItemIcon style={styles.iconContainer}>
              {index === 0 ? <DashboardIcon sx={iconStyle('#121212', '#7399F0')} /> : null}
                {index === 1 ? <HomeIcon /> : null}
                {index === 2 ? <BarChartIcon /> : null}
                {index === 3 ? <ReceiptIcon /> : null}
                {index === 4 ? <MenuBookIcon /> : null}
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <List style={styles.logoutItem}>
        <Tooltip title="Logout" placement="right" arrow>
          <ListItem button style={styles.menuItem}>
            <ListItemIcon style={styles.iconContainer}>
              <LogoutIcon />
            </ListItemIcon>
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  );
}

export default Sidebar;
