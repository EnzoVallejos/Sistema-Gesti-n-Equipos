import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ButtonBack: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'fixed', bottom: 20, left: 20 }}>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0'
          }
        }}
      >
        Volver
      </Button>
    </Box>
  );
};

export default ButtonBack; 