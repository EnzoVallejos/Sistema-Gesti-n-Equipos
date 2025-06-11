import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BrowserRoutes } from '../../Router/BrowserRouter';


const ListButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Seleccione una lista
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          maxWidth: '400px',
          mx: 'auto',
          mt: 4
        }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate(BrowserRoutes.LIST_PC)}
            fullWidth
          >
            Lista de PCs
          </Button>

          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate(BrowserRoutes.LIST_MONITOR)}
            fullWidth
          >
            Lista de Monitores
          </Button>

          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate(BrowserRoutes.LIST_AIRE)}
            fullWidth
          >
            Lista de Aires Acondicionados
          </Button>

          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate(BrowserRoutes.LIST_IMPRESORA)}
            fullWidth
          >
            Lista de Impresoras
          </Button>

          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate(BrowserRoutes.LIST_COMPONENTES)}
            fullWidth
          >
            Lista de Componentes
          </Button>
        </Box>
       
      </Box>
    </Container>
  );
};

export default ListButtons; 