import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header.js";
import Todo from "./components/todo/Todo";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    width: 100%;
    background-color : #FEFBF3;
    margin: 0;
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Todo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
