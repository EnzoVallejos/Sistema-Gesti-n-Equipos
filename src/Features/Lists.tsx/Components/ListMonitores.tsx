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
import { type Monitor } from '../../../Types/Types';
import { useAuth } from '../../../Context/useAuth';

const ListMonitores: React.FC = () => {
  const [monitores, setMonitores] = useState<Monitor[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchMonitores = async () => {
      try {
        const response = await FetchApi<Monitor[]>({
          path: '/Monitor/listado',
          method: 'GET',
          requiresAuth: true,
          token: token || undefined
        });

        if (response.code === 200 && response.data) {
          setMonitores(response.data);
        }
      } catch (error) {
        console.error('Error fetching monitors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonitores();
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
        Lista de Monitores
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N° Inventario</TableCell>
              <TableCell>N° Serie</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Resolución</TableCell>
              <TableCell>Fuente</TableCell>
              <TableCell>ID Oficina</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {monitores.map((monitor) => (
              <TableRow key={monitor.nroInventario}>
                <TableCell>{monitor.nroInventario}</TableCell>
                <TableCell>{monitor.nroSerie}</TableCell>
                <TableCell>{monitor.marca}</TableCell>
                <TableCell>{monitor.modelo}</TableCell>
                <TableCell>{monitor.resolucion}</TableCell>
                <TableCell>{monitor.fuente}</TableCell>
                <TableCell>{monitor.oficina}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListMonitores; 