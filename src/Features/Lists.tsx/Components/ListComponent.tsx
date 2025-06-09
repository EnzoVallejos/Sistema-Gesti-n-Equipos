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
import { useAuth } from '../../../Context/useAuth';
import { type Componente } from '../../../Types/Types';

const ListComponent: React.FC = () => {
  const [items, setItems] = useState<Componente[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await FetchApi<any[]>({
          path: '/Componentes/listado',
          method: 'GET',
          requiresAuth: true,
          token: token || undefined
        });

        if (response.code === 200 && response.data) {
          setItems(response.data);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
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
        Lista de Componentes
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Detalle</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.tipo}>
                <TableCell>{item.tipo}</TableCell>
                <TableCell>{item.marca}</TableCell>
                <TableCell>{item.modelo}</TableCell>
                <TableCell>{item.detalle}</TableCell>
                <TableCell>{item.cantidad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListComponent;
