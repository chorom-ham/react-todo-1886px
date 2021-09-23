import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

import styled from "styled-components";

export default function Item({ todoList, deleteTodo }) {
  const todoLabel = useRef([]);

  const handleDeleteClick = (index) => {
    const value = todoLabel.current[index].innerText;
    deleteTodo(value);
  };

  return (
    <TodoLists>
      {todoList.map((todo, index) => (
        <TodoList key={todo.id}>
          <Checkbox type="checkbox" id={index} />
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
