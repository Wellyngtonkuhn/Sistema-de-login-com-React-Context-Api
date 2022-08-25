
import SideMenu from './sideMenu/Index'
import Content from './content/Index'

import styled from "styled-components";

export default function UserAutenticado() {


  
  return (
    <>
      <Main>
        <Section>
          <SideMenu />
          <Content />
          </Section>
      </Main>
    </>
  );
}

const Main = styled.main`
  max-width: 1295px;
  margin: 1rem auto 0 auto;
`;

const Section = styled.section`
  display: flex;
  gap: 5rem;
`

