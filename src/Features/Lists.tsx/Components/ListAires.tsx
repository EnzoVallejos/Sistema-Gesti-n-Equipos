import React, { useEffect, useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Container,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';
import { FetchApi } from '../../../Api/useAxios';
import { type AireAcondicionado } from '../../../Types/Types';
import { useAuth } from '../../../Context/useAuth';

const ListAires: React.FC = () => {
  const [aires, setAires] = useState<AireAcondicionado[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchAires = async () => {
      try {
        const response = await FetchApi<AireAcondicionado[]>({
          path: '/Aires/listado',
          method: 'GET',
          requiresAuth: true,
          token: token || undefined
        });

        if (response.code === 200 && response.data) {
          setAires(response.data);
        }
      } catch (error) {
        console.error('Error fetching air conditioners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAires();
  }, [token]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 4 }}>
        Lista de Aires Acondicionados
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N° Inventario</TableCell>
              <TableCell>N° Serie</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Frigorías</TableCell>
              <TableCell>Potencia</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>ID Oficina</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aires.map((aire) => (
              <TableRow key={aire.nroInventario}>
                <TableCell>{aire.nroInventario}</TableCell>
                <TableCell>{aire.nroSerie}</TableCell>
                <TableCell>{aire.marca}</TableCell>
                <TableCell>{aire.modelo}</TableCell>
                <TableCell>{aire.frigorias}</TableCell>
                <TableCell>{aire.potencia}</TableCell>
                <TableCell>{aire.tipo}</TableCell>
                <TableCell>{aire.oficina}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListAires; 