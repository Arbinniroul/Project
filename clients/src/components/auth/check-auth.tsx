import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function AuthGuard({ children, requireAdmin = false }) {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const user1 = sessionStorage.getItem('isAuthenticated');

  // If user is authenticated and trying to access /landing, redirect to /home
  if (user1 && location.pathname === "/landing") {
    if (!isRedirecting) {
      setIsRedirecting(true);  // Prevent infinite loop
      return <Navigate to="/home" replace />;
    }
  }

  // If not authenticated and trying to access a protected route, redirect to login
  if (!user1 && !isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  // If authenticated but requires admin permissions and user is not an admin
  if (requireAdmin && (user1 !== "true" || !user?.role || user.role !== "admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Render the children if all checks pass
  return <>{children}</>;
}
