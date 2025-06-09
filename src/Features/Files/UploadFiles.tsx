import { useState } from "react";
import axios from "axios";
import { Button, Typography, Box } from "@mui/material";

const UploadFiles: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);


    try {
      const response = await axios.post(
        "https://backend-service-production-32b5.up.railway.app/api/Componentes/cargar-excel", 
        formData,
        {
          headers: {
           
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Archivo subido con éxito ");
      } else {
        alert("Falló la carga del archivo ");
        console.log(response.data);
      }
    } catch (error: any) {
      console.error("Error al subir el archivo:", error);
      alert("Ocurrió un error al subir el archivo");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cargar Archivo
      </Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Button variant="contained" component="label">
          Elegir Archivo
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Button variant="contained" onClick={handleUpload} disabled={!file}>
          Cargar
        </Button>
        {file && (
          <Typography variant="body1" sx={{ ml: 2 }}>
            {file.name}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default UploadFiles;
