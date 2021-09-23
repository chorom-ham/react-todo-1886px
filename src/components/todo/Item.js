import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

import styled from "styled-components";

export default function Item({ todoList, deleteTodo, checkStyle }) {
  const todoLabel = useRef([]);
  const checkbox = useRef([]);

  const handleDeleteClick = (index) => {
    const value = todoLabel.current[index].innerText;
    deleteTodo(value);
  };

  const handleBoxClick = (index) => {
    const { style } = todoLabel.current[index];
    const { checked } = checkbox.current[index];
    style.textDecoration = checked ? "line-through" : null;
    style.color = checked ? "gray" : null;
  };

  return (
    <TodoLists>
      {todoList.map((todo, index) => (
        <TodoList key={todo.id}>
          <Checkbox
            ref={(box) => (checkbox.current[index] = box)}
            type="checkbox"
            id={index}
            onClick={() => handleBoxClick(index)}
          />
          <StyledLabel
            ref={(label) => (todoLabel.current[index] = label)}
            htmlFor={index}
          >
            {todo.value}
          </StyledLabel>
          <IoCloseOutline
            size="2rem"
            onClick={() => handleDeleteClick(index)}
          />
        </TodoList>
      ))}
    </TodoLists>
  );
}

const TodoLists = styled.div``;
const TodoList = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Checkbox = styled.input`
  transform: scale(1.5);
  margin: 0 1rem;
`;
const StyledLabel = styled.label`
  margin-right: 0.5rem;
`;
