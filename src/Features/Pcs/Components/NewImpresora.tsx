import React, { useEffect, useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl
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

  const [oficinas, setOficinas] = useState<{ oficinaId: number; nombre: string }[]>([]);

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const response = await FetchApi({
          path: '/Oficina/listado',
          method: 'GET',
          requiresAuth: true,
          token: token || undefined
        });
        
        if (response.code === 200) {
          setOficinas(response.data);
        } else {
          console.error('Error al traer oficinas:', response.message);
        }
      } catch (error) {
        console.error('Error al cargar oficinas:', error);
      }
    };

    fetchOficinas();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'nroInventario' || name === 'oficinaId' ? Number(value) : value
    }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: Number(value)
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
               
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
             
              />
            </Box>

            <Box>
              <TextField
                fullWidth
                label="Consumible"
                name="consumible"
                value={formData.consumible}
                onChange={handleChange}
             
              />
            </Box>

            <FormControl fullWidth required>
              <InputLabel id="oficina-label">Oficina</InputLabel>
              <Select
                labelId="oficina-label"
                name="oficinaId"
                value={formData.oficinaId}
                onChange={handleSelectChange}
                label="Oficina"
              >
                {oficinas.map(oficina => (
                  <MenuItem key={oficina.oficinaId} value={oficina.oficinaId}>
                    {oficina.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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