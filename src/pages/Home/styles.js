import styled from "styled-components";
import Portal from "../../assets/portal.gif";

export const Home = styled.main`
  div {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 65px;
    padding-top: 200px;
    color: black;
    font-weight: bolder;
  }

  .sub-titulo {
    font-family: "Rick and Morty Fonts";
    padding-top: 30px;
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
    url(${Portal});
  background-repeat: no-repeat;
  background-position: center;
`;
