import styled from "styled-components";
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <>
      <SideMenu>
        <Ul>
          <li>
            <Link to=''>Cadastrar Usuário</Link>
          </li>
          <li>
            <Link to=''>Listar Usuário</Link>
          </li>
          <li>
            <Link to=''>Teste</Link>
          </li>
          <li>
            <Link to=''>Teste</Link>
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
    li{
    list-style: none;
    padding-bottom: .5rem;
    a{
      color: #000;
      text-decoration: none;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }

`
