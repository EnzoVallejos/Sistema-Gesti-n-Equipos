import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
} from '@mui/material';
import { FetchApi } from '../../../Api/useAxios';
import { useAuth } from '../../../Context/useAuth';
import { type  Impresora } from '../../../Types/Types';
const NewImpresora: React.FC = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState<Impresora>({
    nroInventario: 0,
    nroSerie: '',
    marca: '',
    modelo: '',
    tonnerModelo: '',
    tipo: '',
    consumible: '',
    oficina: '',
    oficinaId: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'nroInventario' || name === 'oficinaId' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await FetchApi<Impresora>({
        path: '/Impresora/crear',
        method: 'POST',
        payload: formData,
        requiresAuth: true,
        token: token || undefined
      });

      if (response.code === 200 || response.code === 201) {
        // Manejar éxito
        console.log('Impresora agregada exitosamente');
      } else {
        // Manejar error
        console.error('Error al agregar impresora:', response.message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Agregar Nueva Impresora
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            <Box>
              <TextField
                fullWidth
                label="Número de Inventario"
                name="nroInventario"
                type="number"
                value={formData.nroInventario}
                onChange={handleChange}
                required
              />
            </Box>
            
            <Box>
              <TextField
                fullWidth
                label="Número de Serie"
                name="nroSerie"
                value={formData.nroSerie}
                onChange={handleChange}
                required
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Marca"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                required
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Modelo"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                required
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Modelo de Tóner"
                name="tonnerModelo"
                value={formData.tonnerModelo}
                onChange={handleChange}
                required
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Consumible"
                name="consumible"
                value={formData.consumible}
                onChange={handleChange}
                required
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="ID de Oficina"
                name="oficinaId"
                type="number"
                value={formData.oficinaId}
                onChange={handleChange}
                required
              />
            </Box>

            <Box sx={{ gridColumn: { xs: '1', sm: '1 / span 2' } }}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                size="large"
                fullWidth
              >
                Agregar Impresora
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default NewImpresora; 