# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar archivos estáticos (cambia dist/ por build/ si es CRA)
COPY dist/ /usr/share/nginx/html

# Exponer el puerto web
EXPOSE 80

# Arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
