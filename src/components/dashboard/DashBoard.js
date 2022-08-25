import { useAuthUser } from "../../context-api/provider/AuthUser";

import { Link } from "react-router-dom";

import styled from "styled-components";

import UserAutenticado from "./UserAutenticado";

export default function DashBoard() {

  const { userData } = useAuthUser();
  
  return (
    <>
      {!userData ? (
        <Section>
          <Div>
            <h1>Faça Login para Continuar </h1>
            <Link to={"/login"}>Login</Link>
            <Link to={"/criar-conta"}>Criar Conta</Link>
          </Div>
        </Section>
      ) : (
        <UserAutenticado />
      )}
    </>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Div = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
    padding: 0 1rem;
    font-size: 1.1rem;
  }
`;
