import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header.js";
import Todo from "./components/todo/Todo";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
  *{  
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }
  html {
    font-size : 10px;
  }
  body {
    width: 100%;
    background-color : #F6FFDB;
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
