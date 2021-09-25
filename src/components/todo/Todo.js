import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      {todoList.map((content) => (
        <Item content={content} key={content.id} />
      ))}
    </div>
  );
}
