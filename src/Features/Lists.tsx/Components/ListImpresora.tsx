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
import { type Impresora } from '../../../Types/Types';
import { useAuth } from '../../../Context/useAuth';

const ListImpresora: React.FC = () => {
    const [impresora, setImpresora] = useState<Impresora[]>([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();

    useEffect(() => {
        const fetchImpresora = async () => {
            try {
                const response = await FetchApi<Impresora[]>({
                    path: '/Impresora/listado',
                    method: 'GET',
                    requiresAuth: true,
                    token: token || undefined
                });

                if (response.code === 200 && response.data) {
                    setImpresora(response.data);
                }
            } catch (error) {
                console.error('Error fetching impresora:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImpresora();
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
                Lista de Impresoras
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>N° Inventario</TableCell>
                            <TableCell>N° Serie</TableCell>
                            <TableCell>Marca</TableCell>
                            <TableCell>Modelo</TableCell>
                            <TableCell>Tonner Modelo</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Consumible</TableCell>
                            <TableCell>Oficina</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {impresora.map((item) => (
                            <TableRow key={item.nroInventario}>
                                <TableCell>{item.nroInventario}</TableCell>
                                <TableCell>{item.nroSerie}</TableCell>
                                <TableCell>{item.marca}</TableCell>
                                <TableCell>{item.modelo}</TableCell>
                                <TableCell>{item.tonnerModelo}</TableCell>
                                <TableCell>{item.tipo}</TableCell>
                                <TableCell>{item.consumible}</TableCell>
                                <TableCell>{item.oficina}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListImpresora;