import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BrowserRoutes } from '../../Router/BrowserRouter';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh'
    }}>
      <Button 
        variant="contained" 
        size="large"
        sx={{ 
          fontSize: '1.5rem',
          padding: '20px 40px',
          minWidth: '300px',
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
          fontSize: '1.5rem',
          padding: '20px 40px',
          minWidth: '300px',
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
          fontSize: '1.5rem',
          padding: '20px 40px',
          minWidth: '300px',
        }}
        onClick={() => navigate(BrowserRoutes.UPLOAD_FILES)}
      >
        Cargar Excel
      </Button>
      
    </Box>
  );
};

export default Home;
