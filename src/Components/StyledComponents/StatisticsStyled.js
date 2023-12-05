import styled from "styled-components";

export const StatisticsStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fe5f55;
  position: absolute;
  transition: right 0.5s  ease-in-out;
  right: ${(props) => (props.position == "0vw" ? "-100vw" : "0vw")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
