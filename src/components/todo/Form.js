import { useRef, useState } from "react";
import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form() {
  const [inputItem, setInputItem] = useState("");
  const inputId = useRef();
  const addItem = (e) => {
    setInputItem(inputId.current.value);
  };

  const items = [];
  const todoList = items.map((id, item) => <li key={id}>{item}</li>);

  return (
    <div>
      <input placeholder="할 일을 입력하세요" ref={inputId} />
      <button onClick={addItem}>등록</button>
      {todoList}
    </div>
  );
}
