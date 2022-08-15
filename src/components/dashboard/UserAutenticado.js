import styled from "styled-components";

export default function UserAutenticado() {
  return (
    <>
      <Section>
        <h1>DashBoar</h1>
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
  h1 {
    font-size: 2rem;
  }
`;
