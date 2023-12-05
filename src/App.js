import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Statistics } from './Components/Statistics';
import { Visualizer } from './Components/Visualizer';
import styled from 'styled-components'

const AppStyled = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
`;


export const App = () => {
  const [position, setPosition] = useState(localStorage.getItem('CurrentView') ?? (localStorage.setItem('CurrentView', '0vw') & '0vw' ));

  useEffect(() => {
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'Enter') {
          yourFunction();
      }
    });
    
    function yourFunction() {
      setPosition(curState => {
        let newState = curState == '0vw' ? '100vw' : '0vw';
        localStorage.setItem('CurrentView', newState);
        return newState;
      });
    }
  }, []);

  return (  
    <AppStyled>
    <Visualizer position={position} />
    <Statistics position={position} />
    </AppStyled>
  );
}