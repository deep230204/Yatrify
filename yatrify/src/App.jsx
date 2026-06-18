import Header from "./components/shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTrip from "./pages/CreateTrip";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/SignUp";
import TripResult from "./pages/TripResult";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />
      <Toaster richColors position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create-trip"
          element={
            <ProtectedRoute>
              <CreateTrip />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trip-result"
          element={
            <ProtectedRoute>
              <TripResult />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
