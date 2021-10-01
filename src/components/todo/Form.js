import { useRef, useState } from "react";
import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form({ todoList, setTodoList }) {
  const [itemTitle, setItemTitle] = useState("");
  const newItem = { title: itemTitle, timeStamp: new Date().toLocaleString() };
  const addItem = (e) => {
    e.preventDefault();
    if (itemTitle !== "") {
      setItemTitle("");
      setTodoList([...todoList, newItem]);
    }
  };
  const getValue = (e) => {
    setItemTitle(e.target.value);
  };
  return (
    <TodoForm onSubmit={addItem}>
      <InputBox
        placeholder="할 일을 입력하세요"
        value={itemTitle}
        onChange={getValue}
      ></InputBox>
      <AddButton>+</AddButton>
    </TodoForm>
  );
}

const TodoForm = styled.form`
  background-color: #f1f7e7;
  border-radius: 1rem;
  border: 0.5rem solid;
  border-color: #cee5d0;
  width: 50rem;
  height: 7rem;
  margin: 2rem auto;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.input`
  padding: 1rem;
  height: 4rem;
  border-radius: 1rem;
  margin-left: 1rem;
  width: 40rem;
  border: solid;
  border-color: #b5cda3;
`;
const AddButton = styled.button`
  margin-left: 3rem;
  margin-right: 1rem;
  height: 4rem;
  background-color: #fffff;
  border-radius: 50%;
  border: solid;
  border-color: #b5cda3;
  font-size: 3rem;
`;
