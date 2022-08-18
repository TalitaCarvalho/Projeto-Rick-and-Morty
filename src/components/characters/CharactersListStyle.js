import styled from "styled-components";

export const Card = styled.section`
  background-color: #f9fbf6;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 20px;

  .card {
    align-items: center;
    background-color: aliceblue;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    border-radius: 50px;
  }

  .card:hover {
    background-color: lightgrey;
  }

  img {
    border-radius: 50px;
    height: 250px;
    width: 250px;
  }

  .texto-informacao h1,
  h4,
  p {
    padding-right: 20px;
    width: 250px;
  }

  .alive {
    color: green;
  }

  .dead {
    color: red;
  }
`;
