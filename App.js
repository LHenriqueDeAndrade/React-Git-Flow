import React from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import * as S from "./Styles/HeaderStyle.js";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 4995px;
`;

export default function App() {
  return (
    <Div>
      <S.GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </Div>
  );
}
