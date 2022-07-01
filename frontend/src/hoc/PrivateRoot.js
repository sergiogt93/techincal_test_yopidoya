import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const PrivateRoot = ({ children }) => {
  const { currentUser } = useAuthContext();
  console.log("currentUser", currentUser);

  return Object.keys(currentUser).length === 0 ? (
    <Navigate to="/login" />
  ) : (
    children
  );
};
