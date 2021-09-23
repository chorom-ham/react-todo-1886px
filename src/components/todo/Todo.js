import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <TodoBlock>
      <Form />
      <Item text="할 일 1번" done={true} />
      <Item text="할 일 2번" done={true} />
      <Item text="할 일 3번" done={false} />
    </TodoBlock>
  );
}

const TodoBlock = styled.div`
  flex: 1;
  padding: 3rem;
  margin: 3rem;
  overflow-y: auto;
  background: #f8ffae;
`;
