import React, { useState } from "react";
import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ title, index, deleteItem }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked); // 현재 todoState 값의 반대로 설정
  };

  return (
    <Wrapper onClick = {toggleChecked}>
      <Text isChecked = {isChecked}>
        {index + 1}. {title} {/*순서 하나 늘리고 todo내용 출력 */}
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
