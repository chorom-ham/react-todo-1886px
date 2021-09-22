// import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  // const [todoList, setTodoList] = useState([]);

  return (
    <Main>
      <Form />
      <Item />
    </Main>
  );
}

const Main = styled.div``;
