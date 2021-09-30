import { useRef, useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";
// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ title, index, deleteItem }) {
  const [isChecked, setIsChecked] = useState(false);
  const toggleisChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Wrapper onClick={toggleisChecked}>
      <Text isChecked={isChecked}>
        {index + 1}.{title}
      </Text>
      <DeleteButton onClick={() => deleteItem(index)}>X</DeleteButton>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Text = styled.div`
  ${(props) =>
    props.isChecked &&
    `
  text-decoration: line-through;
  `}
`;
const DeleteButton = styled.button``;
