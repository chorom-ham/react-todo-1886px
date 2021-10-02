import { useState } from "react";
import styled from "styled-components";

export default function Form({ todoList, setTodoList }) {
  const [todoTitle, setTodoTitle] = useState("");

  const addTodoItem = (event) => {
    event.preventDefault(); // onSubmit, onClick 함수가 실행되면 자동적으로 페이지가 새로고침 되는데 새로고치 하지 말라

    if (todoTitle !== "") {
      setTodoTitle("");
      setTodoList([
        ...todoList, // 배열 안에 있는 아이템들을 펼쳐주는 것 (spread), 넣어주기
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
