import { useRef, useState } from "react";
import styled from "styled-components";

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
const Wrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;
const Text = styled.div`
  ${(props) =>
    props.isChecked &&
    `
  text-decoration: line-through;
  `}
`;
const DeleteButton = styled.button`
  margin-left: 1rem;
  background-color: #cee5d0;
  border-radius: 1rem;
  border: solid;
  border-color: #b5cda3;
`;
