import { useRef, useState } from "react";
import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form({ todoList, setTodoList }) {
  const [content, setContent] = useState("");
  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onCreate = (e) => {
    setTodoList([...todoList, content]);
    setContent("");
  };

  const onEnter = (e) => {
    if (e.key == "Enter") {
      onCreate();
    }
  };

  return (
    <div>
      <Input
        type={"content"}
        placeholder={"할 일을 입력하세요"}
        onChange={onChange}
        onKeyDown={onEnter}
        value={content}
      />
      <AddButton onClick={onCreate}></AddButton>
    </div>
  );
}
const AddButton = styled.button``;
const Input = styled.input``;
