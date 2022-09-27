import styled from "styled-components";

export const footerDiv = styled.div`
  width: 100%;
`;

export const Subscription = styled.section`
  background-color: #dfe4de;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    h2 {
      display: flex;
      margin-bottom: 2vh;
      justify-content: center;
    }
    p {
      display: flex;
      justify-content: center;
      margin-bottom: 3vh;
    }
    input {
      background-color: #eff1ee;
      height: 10vh;
      width: 40vw;
      text-shadow: none;
      text-align: center;
      &::placeholder {
        position: absolute;
        top: 3vh;
        left: 2vw;
        opacity: 0.5;
        margin-left: 5px;
      }
    }
    button {
      background-color: transparent;
      border: solid;
      font-weight: bold;
      width: 10vw;
      height: 8vh;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15vw;
      margin-top: 2vh;
      &:hover {
        background-color: #e9ec8a;
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    height: 55vh;
    div {
      width: 100vw;
      height: 40vh;
      p {
        font-size: 1.8em;
      }
      input {
        width: 95vw;
        height: 9vh;
        margin-left: 2vw;
      }
      button {
        width: 95vw;
        height: 9vh;
        margin-left: 2vw;
      }
    }
  }
`;

export const quickAcess = styled.section`
  height: 40vh;
  background-color: #f2f4f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 50vh;
  }
`;

export const socialMedia = styled.div`
  margin-left: 2vw;
  img {
    margin-left: 1vw;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    top: 10vh;
    margin-left: 15vw;
    display: flex;
    img {
      margin-left: 2vw;
    }
  }
`;

export const footerMenu = styled.ul`
  display: flex;
  margin-right: 4vw;
  & :hover {
    background-color: #e9ec8a;
    border: solid;
    cursor: pointer;
  }
  li {
    font-size: 1.2em;
    margin-left: 4vw;
    cursor: pointer;
    border: solid transparent;
  }
  @media only screen and (max-width: 600px) {
    display: inline-block;
    text-align: center;
    line-height: 5vh;
    position: relative;
    bottom: 10vh;
    right: 52vw;
  }
`;

export const Rights = styled.div`
  background-color: #446061;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    opacity: 0.5;
    font-size: 0.9em;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
    p {
      margin-left: 4vw;
      font-size: 0.4em;
    }
  }
`;
