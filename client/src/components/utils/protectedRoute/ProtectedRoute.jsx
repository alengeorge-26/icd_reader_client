import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("access_token");
    
    return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;