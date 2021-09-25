import { useRef } from "react";
import styled from "styled-components";
import Todo from "./Todo";
// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ itemId, key, content, todoList, setTodoList }) {
  const onRemove = (e) => {
    setTodoList(todoList.filter((item) => item !== content));
    //Cannot read properties of undefined (reading 'filter') 오류
  };

  const onToggle = (e) => {};
  return (
    <div>
      <li onClick={onToggle}>
        {content}
        <DeleteButton onClick={onRemove}>X</DeleteButton>
      </li>
    </div>
  );
}
const DeleteButton = styled.button``;
