import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  const TodoList = () => {
    return todoList.map((content, index) => (
      <Item
        content={content}
        todoList={todoList}
        setTodoList={setTodoList}
        reset={TodoList}
      />
    ));
  };
  return (
    <Container>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <ListForm>
        <TodoTitle>할 일 목록</TodoTitle>
        <TodoList />
      </ListForm>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem;
`;
const TodoTitle = styled.title`
  font-size: 3rem;
  font-weight: bold;
  display: block;
  margin-bottom: 3rem;
  align-items: center;
`;
const ListForm = styled.section`
  margin: 2rem;
  margin-top: 4rem;
  align-items: center;
`;
