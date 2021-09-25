import { useState } from "react";
import styled from "styled-components";

export default function Form({ todoList, setTodoList }) {
  const [todoTitle, setTodoTitle] = useState("");

  const addTodoItem = (event) => {
    event.preventDefault();

    if (todoTitle !== "") {
      setTodoTitle("");
      setTodoList([
        ...todoList,
        { title: todoTitle, timeStamp: new Date().toLocaleString() },
      ]);
    }
  };

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <TodoForm onSubmit={addTodoItem}>
      <TodoInput value={todoTitle} onChange={handleChange}></TodoInput>
      <AddButton>추가</AddButton>
    </TodoForm>
  );
}

const TodoForm = styled.form`
  display: flex;
  width: 100%;
  height: 5rem;
`;

const TodoInput = styled.input`
  width: 90%;
  padding: 0 1rem;
  font-size: 2rem;
`;

const AddButton = styled.button`
  width: 10%;
  margin-left: 1rem;
  font-size: 2rem;
`;
