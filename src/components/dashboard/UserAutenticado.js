import { useAuthUser } from "../../context-api/provider/AuthUser";

import styled from "styled-components";

export default function UserAutenticado() {

  const { userData } = useAuthUser()
  
  return (
    <>
      <Section>
        <h1>DashBoar</h1>
        <h2>Email: {userData.email} </h2>
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
