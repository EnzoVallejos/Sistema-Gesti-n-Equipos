import { type FC, type  PropsWithChildren } from "react";
import { useAuth } from "../Context/useAuth";
import { Navigate } from "react-router-dom";
import { BrowserRoutes } from "./BrowserRouter";

interface AuthComponentProps {
    requiredRole?: boolean;
}

const AuthorizedComponent: FC<PropsWithChildren<AuthComponentProps>> = ({
    children,
    requiredRole
}) => {
    const { user } = useAuth();

    if (!user) {
        return (
            <Navigate
                to={BrowserRoutes.LOGIN}
                replace={true}
            />
        );
    }

    console.log(user);

    if (requiredRole && !user.esAdmin) {
        return null;
    }

    return <>{children}</>;
};

export default AuthorizedComponent;