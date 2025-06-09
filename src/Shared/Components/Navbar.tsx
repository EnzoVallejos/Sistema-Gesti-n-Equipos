import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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


