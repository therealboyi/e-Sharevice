// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const ProtectedRoute = ({ element: Element }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirects to login page with the current location state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Element />;
};

export default ProtectedRoute;
