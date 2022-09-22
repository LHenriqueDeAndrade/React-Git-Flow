import React, { useState } from "react";
import * as S from "../Styles/HeaderStyle.js";
import RC from "../assets/RC.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const Modal = () => {
    return (
      <S.miniMenu>
        <img src={RC} alt="rc" />
        <ul>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <li>SUBSCRIBE</li>
        </ul>
      </S.miniMenu>
    );
  };

  return (
    <S.headerSection>
      <S.Modal
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? "↻" : "≡"}
      </S.Modal>
      {open && Modal()}
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
