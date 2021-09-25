import { useState } from "react";

import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);

  // 새로운 todo를 배열에 추가하고 todo List 업데이트
  const pushTodo = (value) => {
    if (value) {
      const todos = todoList;
      const todo = { id, value };
      setId((current) => current + 1);
      todos.push(todo);
      setTodoList(todos);
    }
  };

  const deleteTodo = (value) => {
    const todos = todoList.filter((todo) => todo.value !== value);
    setTodoList(todos);
  };

  return (
    <Main>
      <Form pushTodo={pushTodo} />
      <TodoTitle>할 일 목록 ✍</TodoTitle>
      <Item todoList={todoList} deleteTodo={deleteTodo} />
    </Main>
  );
}

const Main = styled.div`
  max-width: 80rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

const TodoTitle = styled.h2`
  margin: 0;
  margin-bottom: 4rem;
  margin-left: 0.5rem;
`;
