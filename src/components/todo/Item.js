import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

import styled from "styled-components";

export default function Item({ todoList, deleteTodo }) {
  const todoLabel = useRef([]);

  const handleClick = (index) => {
    // let label = event.target.previousSibling;
    // if (!label) {
    //   label = event.target.parentElement.previousSibling;
    // }
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
          <IoCloseOutline onClick={() => handleClick(index)} />
        </TodoList>
      ))}
    </TodoLists>
  );
}

const TodoLists = styled.div``;
const TodoList = styled.div``;
const Checkbox = styled.input``;
const StyledLabel = styled.label``;
