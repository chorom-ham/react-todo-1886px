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
const Wrapper = styled.div`
  @font-face {
    font-family: "ELAND_Choice_M";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/ELAND_Choice_M.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "ELAND_Choice_M";
  font-size: 2.2rem;
`;
const ItemContainer = styled.div`
  margin: 1rem auto;
  height: 50rem;
  width: 70rem;
  background-color: #f1f7e7;
  border-radius: 1rem;
  border: 1rem solid;
  border-color: #cee5d0;
  padding: 2rem;
`;
