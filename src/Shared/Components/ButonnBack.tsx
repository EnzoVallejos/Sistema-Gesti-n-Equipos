import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ButtonBack: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={handleBack}
      sx={{
        mb: 2,
        backgroundColor: '#1976d2',
        '&:hover': {
          backgroundColor: '#115293'
        }
      }}
    >
      Volver
    </Button>
  );
};

export default ButtonBack;
