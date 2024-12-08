import { Navigate, useLocation } from "react-router-dom"

export default function RequireAuth({ element:Component, ...rest }) {
    const isLoggined = localStorage.getItem('token');
    const location = useLocation();
    return isLoggined ? <Component {...rest} /> : <Navigate to="/login" state={{ from:location }} replace/>;
}