import { useAuthUser } from "../../context-api/provider/AuthUser.js";

import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Menu() {
  const { userData, handleLogOut, VerifyLogin } = useAuthUser();
  VerifyLogin();
  return (
    <>
      <Div>
        <Nav>
          <h1>
            Context API<span> Firebase</span>
          </h1>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"dashboard"}>DashBoard</Link>
            </li>

            {userData ? (
              <li>
                <A onClick={handleLogOut}>Sair</A>
              </li>
            ) : (
              <>
                <li>
                  <Link to={"login"}>Login</Link>
                </li>
                <li>
                  <Link to={"criar-conta"}>Criar Conta</Link>
                </li>
              </>
            )}
          </ul>
        </Nav>
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: #000;
  width: 100vw;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
  max-width: 1295px;
  margin: auto;
  h1 {
    color: #fff;
    text-transform: uppercase;
    span {
      font-size: 1.1rem;
      text-transform: capitalize;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    a {
      text-decoration: none;
      color: #fff;
      transition: all ease 0.3s;
      padding: 0.1rem 0.2rem;
      :hover {
        border-radius: 15px;
        background-color: #fff;
        color: #000;
        padding: 0.3rem 0.4rem;
      }
    }
  }
`;

const A = styled.a`
  cursor: pointer;
`;
