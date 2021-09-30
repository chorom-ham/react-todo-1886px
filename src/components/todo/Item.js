import { useRef } from "react";
import styled from "styled-components";
import Todo from "./Todo";
// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ title, index, deleteItem }) {
  return (
    <Wrapper>
      {index + 1}.{title}
      <DeleteButton onClick={() => deleteItem(index)}>X</DeleteButton>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Text = styled.div``;
const DeleteButton = styled.button``;
