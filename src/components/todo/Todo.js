import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  const EachTodoList = () => {
    return todoList.map((text, index) => (
      <Item
        text={text}
        todoList={todoList}
        setTodoList={setTodoList}
        reset={EachTodoList}
      />
    ));
  };

  return (
    <TodoBlock>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <EachTodoList />
    </TodoBlock>
  );
}

const TodoBlock = styled.div`
  flex: 1;
  padding: 3rem;
  margin: 3rem;
  overflow-y: auto;
  background: #f8ffae;
`;
