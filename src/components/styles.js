import styled from "styled-components";

// aqui foi só um teste, o código se encontra no App.js da linha 18 a 21 
export const Title = styled.h1`
  color: aquamarine;
  span {
    color: red;
  }
  p {
    color: blue;
  }
`;

// Aqui é a stilização do NAVBAR
export const Navegation = styled.ul`
  margin: 0;
  background-color: #48d49c;
  padding: 5px 0;
  background-image: radial-gradient(
    circle at 89.45% 35.64%,
    #ffffff 0,
    #ffffff 25%,
    #ffffff 50%,
    #f7f2f4 75%,
    #f0e7ea 100%
  );

  nav {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  li {
    list-style: none;
    display: inline-block;
  }

  .logo-navbar {
    width: 50px;
    background-image: url("http://localhost:3000/");
  }
`;

// AQUI TRATA DO FOOTER
export const Rodape = styled.footer`
  width: 100%;

  bottom: 0;
  background-image: radial-gradient(
    circle at 100.34% 68.32%,
    #f748e1 0,
    #e442e7 16.67%,
    #ce3eed 33.33%,
    #b53cf2 50%,
    #973cf7 66.67%,
    #703efc 83.33%,
    #3142ff 100%
  );
`;
