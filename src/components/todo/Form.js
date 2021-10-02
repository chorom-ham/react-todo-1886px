import styled from "styled-components";
import React, { useState } from "react";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.

export default function Form({ todoList, setTodoList }) {
  // useState를 사용할 때에는 상태의 기본값을 파라미터로 넣어 호출. 
  // 이 함수 호출 시 배열이 반환되며, 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const [todoContent, setTodoContent] = useState("");

  const addTodoItem = (event) => {
    event.preventDefault(); 

    if (todoContent !== "") { //todoContent가 비어있지 않다면
      setTodoContent(""); // setter 함수를 사용해 비우고
      setTodoList( [ //  setter함수를 사용해
        ...todoList, // todoList에 있는 항목들을 spread해서 
        { title: todoContent, timestamp: new Date().toLocaleString() }, // 왼쪽 형식으로 내용들도 보여준다. 
      ]);
    }
  };

  const handleChange = (event) => {
    setTodoContent(event.target.value);
  };

  return (
    <TodoForm onSubmit={addTodoItem}>
      <TodoInput value={todoContent} onchange={handleChange}></TodoInput>
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

