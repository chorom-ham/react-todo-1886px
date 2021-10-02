import { useState } from "react";
import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
function User({ todo, onRemove }) {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(toggle === false ? true : false);
  };

  return (
    <Wrapper1>
      <Text value={toggle} onClick={onToggle}>
        {todo.text}
      </Text>
      <DeleteButton onClick={() => onRemove(todo.id)}>x</DeleteButton>
    </Wrapper1>
  );
}

export default function Item({ todoList, onRemove }) {
  return (
    <div>
      {todoList.map((todo) => (
        <User todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
const Wrapper1 = styled.div`
  text-align: center;
  margin-left: 7rem;
  margin-top: 1rem;
`;

const Text = styled.text`
  font-size: 1.5rem;
  ${(todo) =>
    todo.value === true
      ? `text-decoration: line-through;`
      : `text-decoration: none;`}
`;

const DeleteButton = styled.button`
  margin-left: 0.5rem;
  background-color: darkgreen;
  color: yellow;
  border: 0.2rem;
`;
