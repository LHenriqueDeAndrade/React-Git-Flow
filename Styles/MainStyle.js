import styled from "styled-components";

export const mainDiv = styled.div`
  background-color: #f2f4f1;
  width: 100%;
`;

export const titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  height: 40vh;
  hr {
    width: 7vw;
    height: 0.4vw;
    background-color: black;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1em;
    height: 25vh;
    hr {
      width: 30vw;
      height: 1vh;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  justify-content: space-evenly;
  background-color: #f2f4f1;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 92%;
    height: 1900px;
    margin-left: 4vw;
  }
`;

export const produto = styled.div`
  overflow: hidden;
  img {
    width: 29vw;
    height: 49vh;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1, 1);
    }
  }
  @media only screen and (max-width: 600px) {
    box-shadow: 5px 9px 1px 5px lightgrey;
    img {
      width: 100%;
      height: 40vh;
    }
  }
`;

export const legenda = styled.div`
  height: 30vh;
  width: 29vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  h2 {
    font-size: 1.8em;
    font-weight: lighter;
  }
  hr {
    width: 3vw;
    height: 0.9vh;
    background-color: black;
    margin-bottom: 2vh;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 35vh;
    hr {
      width: 15vw;
    }
  }
`;

export const DivTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  img {
    width: 50%;
    height: 670px;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    h3 {
      font-size: 3em;
      margin-top: 20vh;
    }
    hr {
      width: 7vw;
      height: 1vh;
      background-color: black;
      margin-top: 1vh;
      margin-bottom: 20vh;
    }
    p {
      display: flex;
      justify-content: flex-end;
      width: 70%;
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    img {
      width: 100%;
      height: 350px;
    }
    div {
      width: 100%;
      justify-content: center;
      h3 {
        margin-top: 10vh;
      }
      hr {
        margin-bottom: 7vh;
        width: 20vw;
      }
      p {
        width: 95%;
        font-size: 0.8em;
        margin-bottom: 5vh;
      }
    }
  }
`;
