import styled from "styled-components";
import Portal from "../..";

export const Home = styled.div `
  div {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 65px;
    color: black;
    font-weight: bolder;
  }

  .sub-titulo {
    font-family: "Rick and Morty Fonts";
    font-size: 90px;
    background-image: linear-gradient(
      to bottom,
      rebeccapurple,
      steelblue,
      turquoise
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    font-weight: bolder;
    color: #000;
    -webkit-text-stroke: 0.5px ;
  }

  height: calc(100vh - 67.61px);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("/assets/images/home/portal.gif");
  background-repeat: no-repeat;
  background-position: center;
`;
