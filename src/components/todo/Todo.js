import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [currentId, setcurrentId] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const addTodoList = (message, isDone) => {
    setTodoList([
      ...todoList,
      {
        id: currentId,
        message: message,
        isDone: isDone,
      },
    ]);
    setcurrentId(currentId + 1);
  };

  const removeTodoList = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const changeTodoState = (id) => {
    setTodoList(
      todoList.map((item) => ({
        ...item,
        isDone: item.id === id ? !item.isDone : item.isDone,
      }))
    );
  };

  return (
    <TodoWrapper>
      <Form addTodoList={addTodoList} />
      <Item
        todoList={todoList}
        changeTodoState={changeTodoState}
        removeTodoList={removeTodoList}
      />
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  width: 95%;
  margin: 3rem auto;
`;
