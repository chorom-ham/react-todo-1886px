import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";


export default function Todo() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <>
      <Item />
      <Form />
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left"> {undoneTasks.length} Todos Left</div>
    </>
  );
}

export default React.memo(Todo);
