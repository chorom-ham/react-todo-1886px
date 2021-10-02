import styled from "styled-components";
import React, { useState } from "react";

export default function Form({ todoList, setTodoList }) {
  // useState를 사용할 때에는 상태의 기본값을 파라미터로 넣어 호출. 
  // 이 함수 호출 시 배열이 반환되며, 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  // const [todoContent, setTodoContent] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  const addTodoItem = (event) => {
    event.preventDefault(); 

    if (todoTitle !== "") { //todoContent가 비어있지 않다면
      setTodoTitle(""); // setter 함수를 사용해 비우고
      setTodoList( [ //  setter함수를 사용해
        ...todoList, // todoList에 있는 항목들을 spread해서 
        { title: todoTitle, timestamp: new Date().toLocaleString() }, // 왼쪽 형식으로 내용들도 보여준다. 
      ]);
    }
  };

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <TodoForm onSubmit={addTodoItem}>
      <TodoInput value={todoTitle} onchange={handleChange}></TodoInput>
      <AddButton>추가</AddButton>
    </TodoForm>
  );
}

//Style
const TodoForm = styled.form`
  display: flex;
  width: 100%;
  height: 5rem;
`;

const TodoInput = styled.input`
  wdith: 90%;
  padding: 0 1rem;
  font-size: 2.5rem;
`;

const AddButton = styled.button`
  width: 10%
  margin-left: 1rem;
  font-size: 2.5rem;
`;

