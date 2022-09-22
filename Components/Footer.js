import React from "react";
import * as S from "../Styles/FooterStyle.js";
import instagram from "../assets/Instagram Ellipse.png";
import twitter from "../assets/Twitter ellipse.png";
import facebook from "../assets/Facebook Ellipse.png";
import pinterest from "../assets/Pinterest Ellipse.png";

export default function Footer() {
  return (
    <S.footerDiv>
      <S.Subscription>
        <div>
          <h2>SUBSCRIBE</h2>
          <p>Sign up for newsletter</p>
          <input placeholder="Your Email"></input>
          <button>SUBMIT</button>
        </div>
      </S.Subscription>

      <S.quickAcess>
        <S.socialMedia>
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={pinterest} alt="pinterest" />
        </S.socialMedia>
        <S.footerMenu>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <li>SUBSCRIBE</li>
        </S.footerMenu>
      </S.quickAcess>
      <S.Rights>
        <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
          Referência:
          https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
      </S.Rights>
    </S.footerDiv>
  );
}
