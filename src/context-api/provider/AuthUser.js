import React, { useState, useEffect } from "react";

export const AuthUserContext = React.createContext("");

export default function AuthUser(props) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("token:");
    if (userToken) {
      setToken(userToken);
    } else {
      setToken("");
    }
  }, []);

  return (
    <>
      <AuthUserContext.Provider value={{ token }}>
        {props.children}
      </AuthUserContext.Provider>
    </>
  );
}

export const useTokenUser = () => React.useContext(AuthUserContext);
