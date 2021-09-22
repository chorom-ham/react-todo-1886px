import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const pushTodo = (value) => {
    const todos = todoList;
    const todo = { id, value };
    setId(id + 1);
    todos.push(todo);
    setTodoList(todos);
  };

  return (
    <Main>
      <Form pushTodo={pushTodo} />
      <TodoTitle>할 일 목록</TodoTitle>
      <Item todoList={todoList} />
    </Main>
  );
}

const Main = styled.div``;

const TodoTitle = styled.h1``;
