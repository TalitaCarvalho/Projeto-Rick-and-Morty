import styled from "styled-components";
export const Title = styled.h1`
  color: aquamarine;
  span {
    color: red;
  }
  p {
    color: blue;
  }
`;

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
