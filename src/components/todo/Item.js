import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdCheck, MdDelete } from "react-icons/md";
// 각 할 일에 대한 정보

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ text, todoList, setTodoList, EachTodoList }) {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(checked === false ? true : false);
  };

  const removeTodo = (e) => {
    setTodoList(todoList.filter((todo) => todo !== text));
  };

  return (
    <TodoItemBlock>
      <CheckButton value={checked} onClick={toggleChecked}>
        {checked && <MdCheck />}
        <Text>{text}</Text>
      </CheckButton>

      <DeleteButton value={checked} onClick={removeTodo}>
        <MdDelete />
      </DeleteButton>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
`;

const CheckButton = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 20px;
  color: red;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
  margin-left: 1rem;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  flex: 1;
  font-size: 15px;
  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
`;

const DeleteButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: gray;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  &:hover {
    color: #81f7d8;
  }
`;
