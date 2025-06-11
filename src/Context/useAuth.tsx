import  { createContext, useContext, useState, useEffect } from "react";
import type { FC, PropsWithChildren } from "react";
import type { UserProfile } from "../Models/User";
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/AuthService';
import toast from 'react-hot-toast';
import { BrowserRoutes } from "../Router/BrowserRouter";
type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    logout: () => void;
    loginUser: (username: string, password: string) => Promise<void>;
    isLoggedIn: () => boolean;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
    const navigate=useNavigate();
    const [token,setToken]=useState<string | null>(null);
    const [user,setUser]=useState<UserProfile | null>(null);
    const [isReady,setIsReady]=useState<boolean>(false);

    useEffect(()=>{
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
        }
        setIsReady(true);
    },[]);
    const loginUser = async (username: string, password: string) => {
        try {
            const res = await login(username, password);
            if (!res.token) {
                toast.error("Credenciales inválidas");
                return;
            }
            const userObj = res.usuario;
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(userObj));
            setToken(res.token);
            setUser(userObj);
            toast.success("¡Inicio de sesión exitoso!");
            navigate(BrowserRoutes.HOME);
        } catch (error: any) {
            console.error("Error en la autenticación:", error);
            if (error.response?.status === 401) {
                toast.error("Credenciales inválidas");
            } else if (error.response?.status === 404) {
                toast.error("Usuario no encontrado");
            } else {
                toast.error("Error del servidor. Por favor, intente más tarde");
            }
        }
    };

    const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{ loginUser, user, token, logout, isLoggedIn }}
        >
            {isReady ? children : <div>Loading...</div>}
        </UserContext.Provider>
    );



};

export const useAuth = () => useContext(UserContext);

 