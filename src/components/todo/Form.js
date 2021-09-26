import styled from "styled-components";
import { useState } from "react";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form({ todoList, setTodoList }) {
  const [text, setText] = useState("");

  const PressEnter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  const onChange = (e) => {
    setText(e.target.value); //text에 값 업데이트
  };

  const addTodo = (e) => {
    const updatedList = [...todoList, text]; //기존+새로운 todo를 배열에 저장
    setTodoList(updatedList); //setTodoList에 업데이트
    setText("");
  };

  return (
    <InputForm>
      <TodoInput
        input
        type="text"
        placeholder="할 일을 입력하세요"
        onKeyDown={PressEnter}
        value={text}
        onChange={onChange}
      ></TodoInput>
      <InputButton input type="button" onClick={addTodo}>
        추가
      </InputButton>
    </InputForm>
  );
}

const InputForm = styled.form`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00462a;
  padding: 1rem;
`;

const TodoInput = styled.input`
  width: 91%;
  height: 100%;
  outline: none;
  padding-left: 1.5rem;
  font-size: 1.5rem;
`;

const InputButton = styled.button`
  width: 8%;
  height: 100%;
  outline: none;
  font-size: 1.5rem;
`;
