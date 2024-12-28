import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../LandingPage/Landingpage";
import Dashboard from "../Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import { useAuth } from "@clerk/clerk-react"; // Import useAuth
import { useEffect, useState } from "react";

export default function Routespage() {
  const { isSignedIn, isLoaded } = useAuth(); // Get the authentication status and loading state
  const [loading, setLoading] = useState(true);

  // Set loading to false once the auth status is loaded
  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  // Debugging: Log the authentication status
  console.log("User  signed in:", isSignedIn);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/Dashboard"
          element={isSignedIn ? <Dashboard /> : <Navigate to="/" />} // Redirect if not signed in
        />
      </Routes>
    </div>
  );
}
