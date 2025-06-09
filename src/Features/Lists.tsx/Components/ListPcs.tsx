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
import { type PC } from '../../../Types/Types';
import { useAuth } from '../../../Context/useAuth';

const ListPcs: React.FC = () => {
  const [pcs, setPcs] = useState<PC[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchPcs = async () => {
      try {
        const response = await FetchApi<PC[]>({
          path: '/Pc/listado',
          method: 'GET',
          requiresAuth: true,
          token: token || undefined
        });

        if (response.code === 200 && response.data) {
          setPcs(response.data);
        }
      } catch (error) {
        console.error('Error fetching PCs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPcs();
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
        Lista de Computadoras
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N° Inventario</TableCell>
              <TableCell>N° Serie</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>RAM</TableCell>
              <TableCell>Tipo RAM</TableCell>
              <TableCell>Disco</TableCell>
              <TableCell>Procesador</TableCell>
              <TableCell>Fuente</TableCell>
              <TableCell>Oficina</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pcs.map((pc) => (
              <TableRow key={pc.nroInventario}>
                <TableCell>{pc.nroInventario}</TableCell>
                <TableCell>{pc.nroSerie}</TableCell>
                <TableCell>{pc.marca}</TableCell>
                <TableCell>{pc.modelo}</TableCell>
                <TableCell>{pc.ram}</TableCell>
                <TableCell>{pc.tipoRam}</TableCell>
                <TableCell>{pc.disco}</TableCell>
                <TableCell>{pc.procesador}</TableCell>
                <TableCell>{pc.fuente}</TableCell>
                <TableCell>{pc.oficina}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListPcs;
