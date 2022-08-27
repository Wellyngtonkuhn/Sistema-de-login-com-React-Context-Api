import { useEffect } from "react";
import { useAuthUser } from "../../../context-api/provider/AuthUser";

import Wellcome from "./Wellcome";
import CadastrarUsuario from "./CadastroUsuario";
import ListarUsuario from "./ListarUsuario";

import styled from "styled-components";

export default function UserAutenticado() {
  
  const { showDashboarContentMenu } = useAuthUser();

  return (
    <>
      <Section>
        {showDashboarContentMenu === 0 && <Wellcome />}
        {showDashboarContentMenu === 1 && <CadastrarUsuario />}
        {showDashboarContentMenu === 2 && <ListarUsuario />}
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  flex-basis: 75%;
  flex-direction: column;
`;
