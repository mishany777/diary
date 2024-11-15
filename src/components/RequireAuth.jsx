import { Navigate } from "react-router-dom"

export default function RequireAuth(props, { children }) {
    const isLoggined = localStorage.getItem('token');
    
    if (!props.isLoggined) {
        return <Navigate to="/login" />;
    }
    return children;
}