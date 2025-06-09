
export type UserProfile = {
    userId: number;
    NomApe: string;
    Username: string;
    Password: string;
    esAdmin: boolean;
};


export type UserProfileToken = {
    token: string;
    fechaExpiracion: string; // Se podria convertir a Date en el frontend
    usuario: UserProfile;
};