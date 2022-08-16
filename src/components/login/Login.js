import styled from "styled-components";

import { useAuthUser } from "../../context-api/provider/AuthUser";

export default function Login() {
  
  const { email, setEmail, senha, setSenha, handleLogin } = useAuthUser();

  return (
    <>
      <Section>
        <h1>Login</h1>
        <Form onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <button type="submit">Entrar</button>
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
