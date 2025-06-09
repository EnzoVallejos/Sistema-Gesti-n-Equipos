import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BrowserRoutes } from '../../Router/BrowserRouter';


const NewTeam: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 2,
      maxWidth: 400,
      margin: '40px auto'
    }}>
      <Button 
        variant="contained"
        fullWidth
        onClick={() => navigate(BrowserRoutes.NEW_PC)}
      >
        Agregar PC
      </Button>
      <Button
        variant="contained" 
        fullWidth
        onClick={() => navigate(BrowserRoutes.NEW_IMPRESORA)}
      >
        Agregar Impresora
      </Button>
      <Button
        variant="contained"
        fullWidth 
        onClick={() => navigate(BrowserRoutes.NEW_AIRE)}
      >
        Agregar Aire Acondicionado
      </Button>
      <Button
        variant="contained"
        fullWidth
        onClick={() => navigate(BrowserRoutes.NEW_MONITOR)}
      >
        Agregar Monitor
      </Button>
      <Button
        variant="contained"
        fullWidth
        onClick={() => navigate(BrowserRoutes.NEW_AUDIVISUAL)}
      >
        Agregar Audiovisual
      </Button>
      <Button
        variant="contained"
        fullWidth
        onClick={() => navigate(BrowserRoutes.NEW_COMPONENTE)}
      >
        Agregar Componente
      </Button>
      </Box>
     

    </Box>
    
     
    


     

  );
};

export default NewTeam;
