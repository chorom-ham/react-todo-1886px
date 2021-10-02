import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";



export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  const deleteItem = (index) => {
    setTodoList(todoList.filter((item, task) => task !== index));
  };

  const renderTodoItems = todoList.map((item, index ) => (
    <Item
      key = {item.timeStamp + item.title}
      title = {item.title}
      index = {index}
      deleteItem = {deleteItem}
    />
  ));

  return (
    <Wrapper>
      <Form todoList = {todoList} setTodoList = {setTodoList} />
      <ItemContainer>
        <Heading> Todo List </Heading>
        {renderTodoItems}
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5rem 10rem
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  padding-top: 1.5rem;
  flex-direction: column;
`;