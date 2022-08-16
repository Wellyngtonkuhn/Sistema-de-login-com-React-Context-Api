import styled from "styled-components";

import Menu from "./components/menu/Menu";

import Rotas from "./Rotas";

export default function App() {
  return (
    <>
      <DefaultStyle>
        <Menu />
        <Rotas />
      </DefaultStyle>
    </>
  );
}

const DefaultStyle = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
