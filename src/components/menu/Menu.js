import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Link } from "react-router-dom";

export default function Menu() {
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  // Arrumar o meu para trocar quando o usuário estiver logado
  useEffect(() => {
    const login = localStorage.getItem("token:");
    setToken(login);
  }, [token]);

  const handleLogOut = () => {
    localStorage.removeItem("token:");
    navigate("/login");
  };

  return (
    <>
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

          {token ? (
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
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  background-color: #000;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
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

      :hover {
        border-radius: 15px;
        background-color: #fff;
        color: #000;
        padding: 0.4rem 0.8rem;
      }
    }
  }
`;

const A = styled.a`
  cursor: pointer;
`;
