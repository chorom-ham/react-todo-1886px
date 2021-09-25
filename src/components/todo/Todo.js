import { useState, useRef } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [inputs, setInputs] = useState({
    text: "",
  });

  const { text } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(0);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      text,
    };
    setTodoList(todoList.concat(todo));

    setInputs({
      text: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Form text={text} onChange={onChange} onCreate={onCreate} />
      <Item todoList={todoList} onRemove={onRemove} />
    </>
  );
}
