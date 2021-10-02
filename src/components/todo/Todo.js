import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  const deleteItem = (indexToBeDeleted) => {
    setTodoList(todoList.filter((item, index) => index !== indexToBeDeleted));
  };

  const renderTodoItems = todoList.map((item, index) => (
    <Item
      key={item.timeStamp + item.title}
      title={item.title}
      index={index}
      deleteItem={deleteItem}
    />
  ));

  return (
    <Wrapper>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <ItemContainer>
        <Heading>Todo List</Heading>
        {renderTodoItems}
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 10rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
`;
