import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { auth } from "../../fireStore/index";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthUserContext = React.createContext("");

export default function AuthUser(props) {

   const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();

  // Cadastro de usuário
  const handleCadastro = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
      .then((data) => {
        const user = data.user;
        alert("Usuário Criado com Sucesso!");
        localStorage.setItem("user:", JSON.stringify(user));
        navigate("/dashboard", { replace: true });
        document.location.reload(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            alert("Email invalido");
            break;
          case "auth/weak-password":
            alert("Senha muito Fraca");
            break;
          case "auth/email-already-in-use":
            alert("Email em Uso");
            break;
          default:
            break;
        }
      });
    setUsuario({
      nome: "",
      email: "",
      senha: "",
    });
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
      .then((data) => {
        const user = data.user;
        localStorage.setItem("user:", JSON.stringify(user));
        navigate("/dashboard", { replace: true });
        document.location.reload(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (
          (errorCode === "auth/user-not-found") |
          (errorCode === "auth/wrong-password")
        ) {
          alert("Email ou Senha estão incoretos!");
        }
      });
    setUsuario({
      nome: "",
      email: "",
      senha: "",
    });
  };

  // Logout
  const handleLogOut = () => {
    localStorage.removeItem("user:");
    navigate("/login");
    document.location.reload(true);
  };

  // Verifica se usuário está logado
  useEffect(() => {
    const userStorage = localStorage.getItem("user:");
    const data = JSON.parse(userStorage)
    setUserData(data)
  }, []);

  return (
    <>
      <AuthUserContext.Provider
        value={{
          userData,
          usuario,
          setUsuario,
          handleCadastro,
          handleLogin,
          handleLogOut,
        }}
      >
        {props.children}
      </AuthUserContext.Provider>
    </>
  );
}

export const useAuthUser = () => React.useContext(AuthUserContext);
