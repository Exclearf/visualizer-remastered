import styled from "styled-components";

export const VisualizerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #362023;
  position: absolute;
  transition: left 0.5s ease-in-out; 
  left: ${props => '-' + props.position};
  display: flex;
  justify-content: center;
  align-items: center;
`;
