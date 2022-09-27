import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import headerBackg from "../assets/headerBackg.png";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Source+Sans+Pro:wght@200&display=swap');
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    font-family: 'Source Sans Pro', sans-serif;
    ::-webkit-scrollbar { 
    display: none;
  }
}
`;

export const miniMenu = styled.nav`
  position: relative;
  top: 6vw;
  img {
    position: absolute;
    left: 2vw;
    width: 6vw;
  }
  ul {
    display: flex;
    position: absolute;
    left: 49.4vw;
    & :hover {
      background-color: #e9ec8a;
      border: solid;
      cursor: pointer;
    }
  }
  li {
    font-size: 1.8em;
    margin-left: 6vw;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.3em;
    ul {
      left: 24vw;
    }
  }
`;

export const headerSection = styled.section`
  width: 100%;
  height: 69vw;
  background: url(${headerBackg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  h1 {
    position: absolute;
    top: 78vh;
    left: 35vw;
    font-size: 5.5em;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    height: 140vw;
    background-size: 210%;
    background-position: 100% 100%;
    h1 {
      font-size: 1em;
      opacity: 0.7;
      top: 38vh;
      left: 34vw;
      letter-spacing: 1vw;
    }
  }
`;

export const Modal = styled.button`
  display: none;
  font-size: 0.1em;
  @media only screen and (max-width: 600px) {
    display: flex;
    background-color: transparent;
    color: black;
    border: none;
    font-size: 1.4em;
    position: relative;
    left: 85vw;
  }
`;

export const Menu = styled.nav`
  position: relative;
  top: 6vw;
  img {
    position: absolute;
    left: 2vw;
    width: 6vw;
  }
  ul {
    display: flex;
    position: absolute;
    left: 49.4vw;
    & :hover {
      background-color: #e9ec8a;
      border: solid;
      cursor: pointer;
    }
  }
  li {
    font-size: 1.8em;
    margin-left: 6vw;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.3em;
    display: none;
    ul {
      left: 24vw;
    }
  }
`;
