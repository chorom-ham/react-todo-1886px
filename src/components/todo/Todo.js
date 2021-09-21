import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return(
      <StyledTodo>
        <Title>ToDo List</Title>
        <Form />
      </StyledTodo>
  );
}

const StyledTodo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10rem auto;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: white;
  margin: 1rem;
`;