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
import { type Audiovisual } from '../../../Types/Types';
import { useAuth } from '../../../Context/useAuth';

const ListAudioVisual: React.FC = () => {
    const [audiovisual, setAudiovisual] = useState<Audiovisual[]>([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();

    useEffect(() => {
        const fetchAudiovisual = async () => {
            try {
                const response = await FetchApi<Audiovisual[]>({
                    path: '/Audiovisual/listado',
                    method: 'GET',
                    requiresAuth: true,
                    token: token || undefined
                });
                
                if (response.code === 200 && response.data) {
                    setAudiovisual(response.data);
                }
            } catch (error) {
                console.error('Error fetching audiovisual:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAudiovisual();
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
                Lista de Audiovisuales
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>N° Inventario</TableCell>
                            <TableCell>N° Serie</TableCell>
                            <TableCell>Marca</TableCell>
                            <TableCell>Modelo</TableCell>
                            <TableCell>Accesorios</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Oficina</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {audiovisual.map((item) => (
                            <TableRow key={item.nroInventario}>
                                <TableCell>{item.nroInventario}</TableCell>
                                <TableCell>{item.nroSerie}</TableCell>
                                <TableCell>{item.marca}</TableCell>
                                <TableCell>{item.modelo}</TableCell>
                                <TableCell>{item.accesorios}</TableCell>
                                <TableCell>{item.tipo}</TableCell>
                                <TableCell>{item.oficina}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default ListAudioVisual;