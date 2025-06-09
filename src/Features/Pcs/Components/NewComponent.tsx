import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { type Componente } from "../../../Types/Types"
import { useAuth } from "../../../Context/useAuth"
import { useState } from "react"
import { FetchApi } from "../../../Api/useAxios"
const NewComponent: React.FC = () => {
    const {token} = useAuth()
    const [formData, setFormData] = useState<Componente>({
        marca: '',
        modelo: '',
        detalle: '',
        tipo: '',
        cantidad: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await FetchApi<Componente>({
                path: '/Componentes/crear',
                method: 'POST',
                payload: formData,
                requiresAuth: true,
                token: token || undefined
            })
        
        
        if (response.code === 200 || response.code === 201) {
            console.log('Componente agregado exitosamente')
        } else {
                console.error('Error al agregar componente:', response.message)
            }
        } catch (error) {
            console.error('Error en la solicitud:', error)
        }

    }
    return (
        <Container maxWidth="md">
            <Box sx={{mt:4,mb:4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Agregar Nuevo Componente
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'}, gap: 3}}>  
                    <TextField
                        fullWidth
                        label="Marca"
                        name="marca"
                        value={formData.marca}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Modelo"
                        name="modelo"
                        value={formData.modelo}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Detalle"
                        name="detalle"
                        value={formData.detalle}
                        onChange={handleChange}
                        required
                    />  
                    <TextField
                        fullWidth
                        label="Tipo"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        required

                    />          
                    <TextField
                        fullWidth
                        label="Cantidad"
                        name="cantidad"
                        value={formData.cantidad}
                        onChange={handleChange}
                        required
                    />  
                    <Button type="submit" variant="contained" color="primary">Agregar</Button>
                 </Box>

            </form>
        </Container>
    )
}

export default NewComponent;