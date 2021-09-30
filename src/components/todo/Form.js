import { useRef, useState } from "react";
import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form({ todoList, setTodoList }) {
  const [itemTitle, setItemTitle] = useState("");
  const [itemId, setItemId] = useState();
  const newItem = { title: itemTitle, id: itemId };
  const addItem = (e) => {
    e.preventDefault();
    if (itemTitle !== "") {
      setItemTitle("");
      setTodoList([...todoList, newItem]);
    }
  };
  const getValue = (e) => {
    setItemTitle(e.target.value);
    setItemId(e.target.id);
  };
  return (
    <TodoForm onSubmit={addItem}>
      <InputBox value={itemTitle} onChange={getValue} id={itemId}></InputBox>
      <AddButton>추가</AddButton>
    </TodoForm>
  );
}

const TodoForm = styled.form``;
const InputBox = styled.input``;
const AddButton = styled.button``;
