import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [nextId, setNextId] = useState(0);

  const addItem = (newItem) => {
    setTodoList([...todoList, { id: nextId, text: newItem }]);
    setNextId(nextId + 1);
  };

  const removeItem = (id, text) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Form onSubmit={addItem}></Form>
      <Title>Todo List</Title>
      <StyledList>
        {todoList.map((item) => (
          <Item
            key={item.id}
            text={item.text}
            onClick={() => removeItem(item.id, item.text)}
          ></Item>
        ))}
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  margin-left: 5rem;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 5rem;
`;