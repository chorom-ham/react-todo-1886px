import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdCheck, MdDelete } from "react-icons/md";
// 각 할 일에 대한 정보

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ text, todoList, setTodoList, EachTodoList }) {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const removeTodo = (e) => {
    setTodoList(todoList.filter((todo) => todo !== text));
  };

  return (
    <TodoItemBlock>
      <CheckButton done={checked} onClick={toggleChecked}>
        <CheckCircle done={checked}>{checked && <MdCheck />}</CheckCircle>
        <Text>{text}</Text>
      </CheckButton>

      <DeleteButton done={checked} onClick={removeTodo}>
        <MdDelete />
      </DeleteButton>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: fit-content;
  padding: 2rem 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
`;

const CheckButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1.5rem;

  ${(props) =>
    props.done === true &&
    css`
      text-decoration: line-through;
      font-style: italic;
      color: gray;
    `}
`;

const CheckCircle = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 2rem;
  border-radius: 50%;
  border: 1px solid darkgray;

  &:hover {
    border: 1px solid black;
  }

  ${(props) =>
    props.done === true &&
    css`
      color: #ff0040;
      border: 2px solid #ff0040;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 15px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
  color: gray;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #81f7d8;
  }
`;
