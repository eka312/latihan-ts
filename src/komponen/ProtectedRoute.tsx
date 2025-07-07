import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type ProtectedProps = {
    children: JSX.Element;
}

function ProtectedRoute({children}:ProtectedProps) {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;