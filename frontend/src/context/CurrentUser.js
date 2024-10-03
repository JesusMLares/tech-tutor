import { useState, useEffect, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const checkTokenValidity = (token) => {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        setCurrentUser(decoded);
      } else {
        console.error('Token has expired');
        localStorage.removeItem('token');
        setCurrentUser(null);
      }
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkTokenValidity(token);
    }
  }, []);

  const updateToken = (token) => {
    localStorage.setItem('token', token);
    checkTokenValidity(token);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, updateToken }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);