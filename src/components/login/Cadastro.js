import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import styled from "styled-components";

import env from "react-dotenv";

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

export default function Cadastro() {

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const navigate = useNavigate()

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

  return (
    <>
      <Section>
        <h1>Criar Conta</h1>
        <Form>
          <label>
            Nome
            <input
              type="text"
              value={usuario.nome}
              onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={usuario.email}
              onChange={(e) =>
                setUsuario({ ...usuario, email: e.target.value })
              }
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              value={usuario.senha}
              onChange={(e) =>
                setUsuario({ ...usuario, senha: e.target.value })
              }
            />
          </label>
          <button type="submit" onClick={handleCadastro}>
            Criar Conta
          </button>
        </Form>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100vw;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  max-width: 15rem;

  input {
    margin: 1rem 0;
    padding: 0.4rem 0.4rem;
    margin-left: 10px;
    border-radius: 8px;
    border: 1px solid #333;
  }

  button {
    padding: 0.7rem 2rem;
    border-radius: 25px;
    border: unset;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all ease 0.3s;
    background-color: gray;
    color: #fff;
    font-size: 1rem;
    :hover {
      background-color: #000;
    }
  }
`;
