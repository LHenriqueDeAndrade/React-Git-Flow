import React from "react";
import * as S from "../Styles/HeaderStyle.js";
import RC from "../assets/RC.png";

export default function Header() {
  return (
    <S.headerSection>
      <S.Menu>
        <img src={RC} alt="rc" />
        <ul>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <li>SUBSCRIBE</li>
        </ul>
      </S.Menu>
      <h1>RECIPES</h1>
    </S.headerSection>
  );
}
