import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import env from "react-dotenv";

export const AuthUserContext = React.createContext("");

const firebaseConfig = {
  apiKey: env.REACT_APP_API_KEY,
  authDomain: env.REACT_APP_AUTHDOMAIN,
  projectId: env.REACT_APP_PROJECTID,
  storageBucket: env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: env.REACT_APP_MESSAGINSENDERID,
  appId: env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export default function AuthUser(props) {

  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
      .then((data) => {
        const user = data.user;
        alert('Usuário Criado com Sucesso!')
        localStorage.setItem('token:', user.accessToken)
        navigate('/dashboard', { replace:true })
        document.location.reload(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        switch(errorCode){
          case 'auth/invalid-email':
            alert('Email invalido')
          break
          case 'auth/weak-password':
            alert('Senha muito Fraca')
          break
          case 'auth/email-already-in-use':
            alert('Email em Uso')
          break
          default:
          break
        }
      });
    setUsuario({
      nome: "",
      email: "",
      senha: "",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, senha)
      .then((data) => {
        const login = data.user;
        localStorage.setItem("token:", login.accessToken);
        navigate("/dashboard", { replace: true });
        document.location.reload(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/user-not-found' | errorCode === 'auth/wrong-password'){
          alert('Email ou Senha estão incoretos!')
        }
      });
    setEmail("");
    setSenha("");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token:");
    navigate("/login");
    document.location.reload(true);
  };


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
      <AuthUserContext.Provider value={{ token, email, setEmail, senha, usuario, setUsuario, setSenha, handleCadastro, handleLogin, handleLogOut }}>
        {props.children}
      </AuthUserContext.Provider>
    </>
  );
}

export const useAuthUser = () => React.useContext(AuthUserContext);
