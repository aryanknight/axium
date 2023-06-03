import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";

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
    </Routes>
  );
}

export default App;
