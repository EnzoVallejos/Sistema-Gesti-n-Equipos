import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

interface MenuItem {
  text: string;
  href: string;
  onClick?: () => void;
}

interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SGI SAE
          </Typography>
          {menuItems.map((item, index) => (
            <Button 
              color="inherit" 
              key={index} 
              component={item.onClick ? 'button' : Link} 
              to={item.onClick ? undefined : item.href}
              onClick={item.onClick}
            >
              {item.text}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;


