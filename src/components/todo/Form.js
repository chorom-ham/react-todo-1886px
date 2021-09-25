import { useRef, useState } from "react";
import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form({ todoList, setTodoList }) {
  const [content, setContent] = useState("");
  const inputId = useRef();
  const nextId = useRef(0);

  const addItem = () => {
    setContent(inputId.current.value);
    const todo = { id: nextId.current, content };
    setTodoList([...todoList, todo]);
  };

  return (
    <div>
      <input placeholder="할 일을 입력하세요" ref={inputId} />
      <button onClick={addItem}>등록</button>
    </div>
  );
}
