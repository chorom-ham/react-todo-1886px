import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const deleteItem = (index) => {
    setTodoList(todoList.filter((item, _index) => _index !== index));
  };
  const items = todoList.map((item, index) => (
    <Item
      key={index}
      title={item.title}
      index={index}
      deleteItem={deleteItem}
    />
  ));
  return (
    <Wrapper>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <ItemContainer>{items}</ItemContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const ItemContainer = styled.div``;
