import styled from "styled-components";

import { useAuthUser } from "../../../context-api/provider/AuthUser";

export default function Index() {

  const { handleDashboardMenu } = useAuthUser();

  return (
    <>
      <SideMenu>
        <Ul>
          <li>
            <a onClick={() => handleDashboardMenu(0)}>
              Wellcome
            </a>
          </li>
          <li>
            <a onClick={() => handleDashboardMenu(1)}>
              Cadastrar Usuário
            </a>
          </li>
          <li>
            <a onClick={() => handleDashboardMenu(2)}>
              Listar Usuários
            </a>
          </li>
          <li>
            <a>Teste</a>
          </li>
        </Ul>
      </SideMenu>
    </>
  );
}

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 25%;
`;

const Ul = styled.ul`
  padding: 1rem;
  li {
    list-style: none;
    padding-bottom: 0.5rem;
    a {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;
