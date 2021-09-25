import { useState } from "react";
import styled from "styled-components";

export default function Item({ title, index, deleteItem }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper onClick={toggleChecked}>
      <Text isChecked={isChecked}>
        {index + 1}. {title}
      </Text>
      <DeleteButton type="button" onClick={() => deleteItem(index)}>
        X
      </DeleteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 2rem;
  ${(props) =>
    props.isChecked &&
    `
    text-decoration: line-through;
    color: #ccc;
  `}
`;

const DeleteButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin-left: 1rem;
`;
