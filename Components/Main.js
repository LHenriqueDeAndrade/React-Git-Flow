import React from "react";
import * as S from "../Styles/MainStyle.js";
import Bolo from "../assets/Cake.png";
import Pizza from "../assets/pizza.png";
import Vitamina from "../assets/bananaSmoothie.png";
import Colher from "../assets/spoon.png";

export default function Main() {
  return (
    <S.mainDiv>
      <S.titulo>
        <h1>LATEST RECIPES</h1>
        <hr></hr>
      </S.titulo>
      <S.Div>
        <S.produto>
          <img src={Bolo} alt="Bolo" />
          <S.legenda>
            <hr></hr>
            <h2>Red Velvet Cake</h2>
          </S.legenda>
        </S.produto>
        <S.produto>
          <img src={Pizza} alt="Pizza de Margherita" />
          <S.legenda>
            <hr></hr>
            <h2>Margherita Pizza</h2>
          </S.legenda>
        </S.produto>
        <S.produto>
          <img src={Vitamina} alt="banana Smoothie" />
          <S.legenda>
            <hr></hr>
            <h2>Peanut Smoothie</h2>
          </S.legenda>
        </S.produto>
      </S.Div>
      <S.DivTwo>
        <img src={Colher} alt="Colher" />
        <div>
          <h3>ABOUT</h3>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </p>
        </div>
      </S.DivTwo>
    </S.mainDiv>
  );
}
