import styled from "styled-components";
import { useState } from "react";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ task, todoList, setTodoList }) {
  const [state, setState] = useState("undone");
  const changeState = () => {
    setState(state === "undone" ? "done" : "undone");
  };

  const removeItem = (e) => {
    setTodoList(todoList.filter((item) => item !== task));
  };

  return (
    <section>
      <ul>
        <li
          style={{ textDecoration: task === "none" ? "line-through" : "none" }}
          onClick={changeState}
        >
          {task}
        </li>
        <button value={state} onClick={removeItem}></button>
      </ul>
    </section>
  );
}
