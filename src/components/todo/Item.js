import styled, { css } from "styled-components";
import { useState } from "react";
import Form from "./Form";

export default function Item({ content, todoList, setTodoList, TodoList }) {
  const [state, setState] = useState("undone");

  const changeState = () => {
    setState(state === "undone" ? "done" : "undone");
  };

  const removeTodo = (e) => {
    setTodoList(todoList.filter((item) => item !== content));
  };

  return (
    <TodoContents>
      <Text value={state} onClick={changeState}>
        {content}
      </Text>
      <RemoveButton value={state} onClick={removeTodo}>
        X
      </RemoveButton>
    </TodoContents>
  );
}

const TodoContents = styled.form`
  display: flex;
  font-size: 10rem;
  margin: 1rem;
  align-items: center;
`;
const Text = styled.div`
  font-size: 2rem;
  color: #495057;
  margin-left: 1rem;
  ${(props) =>
    props.value === "done" &&
    css`
      text-decoration: line-through;
    `}
`;

const RemoveButton = styled.button`
  margin-left: 1rem;
  background-color: #00462a;
  border-radius: 50%;
  border: none;
  color: #fff;
  height: 2rem;
`;
