import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const pushTodo = (todo) => {
    const todos = todoList;
    todos.push(todo);
    setTodoList(todos);
  };

  return (
    <Main>
      <Form pushTodo={pushTodo} />
      <Item />
    </Main>
  );
}

const Main = styled.div``;
