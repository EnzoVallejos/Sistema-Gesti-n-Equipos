import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BrowserRoutes } from '../../Router/BrowserRouter';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: 2, md: 4 },
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      padding: { xs: 2, md: 0 }
    }}>
      <Button 
        variant="contained" 
        size="large"
        sx={{ 
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          padding: { xs: '15px 30px', md: '20px 40px' },
          minWidth: { xs: '250px', md: '300px' },
          width: { xs: '100%', md: 'auto' },
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0'
          }
        }}
        onClick={() => navigate(BrowserRoutes.LIST_GENERAL)}
      >
        Equipos
      </Button>
      
      <Button 
        variant="contained" 
        size="large"
        sx={{ 
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          padding: { xs: '15px 30px', md: '20px 40px' },
          minWidth: { xs: '250px', md: '300px' },
          width: { xs: '100%', md: 'auto' },
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0'
          }
        }}
        onClick={() => navigate(BrowserRoutes.NEW_TEAM)}
      >
        Agregar Equipos
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          padding: { xs: '15px 30px', md: '20px 40px' },
          minWidth: { xs: '250px', md: '300px' },
          width: { xs: '100%', md: 'auto' },
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0'
          }
        }}
        onClick={() => navigate(BrowserRoutes.UPLOAD_FILES)}
      >
        Cargar Excel
      </Button>
    </Box>
  );
};

export default Home;
