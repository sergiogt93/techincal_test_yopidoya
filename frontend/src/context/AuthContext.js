import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const signin = (user, token) => {
    setCurrentUser({
      user: user,
      token: token,
    });
    navigate("/");
  };

  const value = {
    currentUser,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
