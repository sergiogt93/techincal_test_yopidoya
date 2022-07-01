import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repositories } from "./pages/Repositories";
import { OwnersRepositories } from "./pages/OwnersRepositories";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { Login } from "./pages/Login";
import { PrivateRoot } from "../src/hoc/PrivateRoot";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:user/repositories" element={<Repositories />} />
        <Route
          path="user/:user/repositories/:repositories/owners"
          element={
            <PrivateRoot>
              <OwnersRepositories />
            </PrivateRoot>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
