import { useAuthUser } from '../../../context-api/provider/AuthUser'

import styled from "styled-components";

export default function CadastroUsuario() {
  const { userData } = useAuthUser();

  return (
    <>
      <Section>
        <h1>Cadastro de Usuário</h1>
        <h2> Email: {userData.email} </h2>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  flex-basis: 75%;
  flex-direction: column;
`;
