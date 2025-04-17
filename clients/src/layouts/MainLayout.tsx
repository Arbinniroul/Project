import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";

import AuthLayout from "@/components/common/Layout";
import NotFound from "@/components/auth/not-found";
import AuthGuard from "@/components/auth/check-auth";
import HealthProblems from "@/pages/HealthSolutions";
import Solutions from "@/pages/Solutions";

const LandingPage = lazy(() => import("@/pages/Landing"));
const Login = lazy(() => import("@/components/auth/Login"));
const Register = lazy(() => import("@/components/auth/Register"));
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Prediction = lazy(() => import("@/pages/Prediction"));
const Location = lazy(() => import("@/pages/Location"));
const SeasonalVegetable = lazy(() => import("@/pages/SesonalVegetable"));
const Contact = lazy(() => import("@/pages/Contact"));
const Offspring = lazy(() => import("@/pages/Offspring"));

export default function MainLayout() {
  // Check authentication state from sessionStorage or Redux store
  const { isAuthenticated } = useSelector((state) => state.auth);
  const user1 = sessionStorage.getItem("isAuthenticated");

  // Sync sessionStorage state with Redux if needed
  useEffect(() => {
    if (user1 && !isAuthenticated) {
      // Sync sessionStorage authentication state with Redux
      // You can dispatch an action here if needed
    }
  }, [user1, isAuthenticated]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Root Route */}
            <Route path="/" element={<Navigate to="/landing" replace />} />

            {/* Public Routes */}
            <Route path="/landing" element={<LandingPage />} />

            {/* Auth Routes */}
            <Route
              path="/auth"
              element={isAuthenticated || user1 ? <Navigate to="/home" replace /> : <AuthLayout />}
            >
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* Authenticated Routes */}
            <Route
              path="/home"
              element={
                <AuthGuard>
                  <Home />
                </AuthGuard>
              }
            />
            <Route
              path="/about"
              element={
                <AuthGuard>
                  <About />
                </AuthGuard>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
            <Route
              path="/contact"
              element={
                <AuthGuard>
                  <Contact />
                </AuthGuard>
              }
            />
            <Route
              path="/transportation"
              element={
                <AuthGuard>
                  <Location />
                </AuthGuard>
              }
            />
             <Route
              path="/recommendation"
              element={
                <AuthGuard>
                 <SeasonalVegetable />
                </AuthGuard>
              }
            />
             <Route
              path="/pestdetection"
              element={
                <AuthGuard>
                  <HealthProblems />
                </AuthGuard>
              }
            />
             <Route
              path="/offspring"
              element={
                <AuthGuard>
                  <Offspring />
                </AuthGuard>
              }
            />
             <Route
              path="/predictions"
              element={
                <AuthGuard>
                 <Prediction />
                </AuthGuard>
              }
            />
             <Route
              path="/solutions"
              element={
                <AuthGuard>
                  <Solutions/>
                </AuthGuard>
              }
            />






          

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
