import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Section>
        <Descricao>
          <p>
            Sistema de Login Criado com Style Components, Autenticação de usuário
            e banco de dados com o FireBase e Context API.
            O Token de Autenticação fica armazenado em Local Storage
          </p>
        </Descricao>
        <HomeSection>
          <header>
            <h1>Home</h1>
          </header>
          <Nav>
            <ul>
              <li>
                <a href="">Contex Api</a>
              </li>
              <li>
                <a href="">Styled Components</a>
              </li>
              <li>
                <a href="">FireBase</a>
              </li>
            </ul>
          </Nav>
        </HomeSection>
      </Section>
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
`;

const Descricao = styled.header`
  max-width: 60vw;
  text-align: center;
  line-height: 1.5rem;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
`;

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
  header
    h1{
      font-size: 2rem;
    }
`;

const Nav = styled.nav`
  ul li {
    padding-bottom: 0.5rem;
  }
  a {
    text-decoration: none;
  }
`;
