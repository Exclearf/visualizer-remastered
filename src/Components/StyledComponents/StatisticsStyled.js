import styled from "styled-components";

export const StatisticsStyled = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: Georgia, serif;
  font-size: 31px;
  font-weight: bold;
  flex-direction: column;
  background-color: #f7f7ff;
  color: #362023;
  position: absolute;
  transition: right 0.5s ease-in-out;
  right: ${(props) => (props.position === "0vw" ? "-100vw" : "0vw")};
  display: flex;
  justify-content: center;
  align-items: center;

  select,
  input,
  button {
    margin: 10px;
    padding: 5px;
    font-size: 16px;
  }

  select {
    width: 5vw;
  }

  input {
    width: 7vw;
  }

  button {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }


  .result-data {
    margin-top: 20px;

  }
`;
