import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import styled from "styled-components";

import { initializeApp } from "firebase/app";

import env from "react-dotenv";

const firebaseConfig = {
  apiKey: env.REACT_APP_API_KEY,
  authDomain: env.REACT_APP_AUTHDOMAIN,
  projectId: env.REACT_APP_PROJECTID,
  storageBucket: env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: env.REACT_APP_MESSAGINSENDERID,
  appId: env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig)

const auth = getAuth()

export default function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  const handleLogin = (e) => {
      e.preventDefault()

      signInWithEmailAndPassword(auth, email, senha).then((data) => {
        const login = data.user
        localStorage.setItem('token:', login.accessToken )
        navigate('/dashboard', {replace: true})

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      setEmail('')
      setSenha('')
  }


  return (
    <>
      <Section>
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
          <label>
            Email 
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Senha 
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
          <button type="submit">Entrar</button>
        </Form>
      </Section>
    </>
  );
}

const Section = styled.section`
    display:flex;
    flex-direction: column;
    text-align: center;
    max-width: 100vw;
    min-height: 80vh;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    max-width: 15rem;
    input{
        margin: 1rem 0;
        padding: .4rem .4rem;
        margin-left: 10px;
        border-radius: 8px;
        border: 1px solid #333;
    }

    button{
        padding: 0.7rem 2rem;
        border-radius: 25px;
        border: unset;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all ease 0.3s;
        background-color: gray;
        color: #fff;
        font-size: 1rem;
        :hover{
            background-color: #000;
        }
    }
`;
