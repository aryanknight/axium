import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import CustomizePlans from "./Pages/CustomizePlans";

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
    </Routes>
  );
}

export default App;
