import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import CustomizePlans from "./Pages/CustomizePlans";
import LoginPage from "./Pages/LoginPage";

function App() {
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/"></Navigate>;
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <HomePage />
        }
      />
      <Route
        exact
        path="/customizeplan"
        element={
          <CustomizePlans />
        }
      />
      <Route
        exact
        path="/login"
        element={
          <LoginPage />
        }
      />
    </Routes>
  );
}

export default App;
