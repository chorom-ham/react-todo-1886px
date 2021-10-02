import React, { useState } from "react";
import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ title, index, deleteItem }) {
  const [todoState, setTodoState] = useState(false);

  const changeState = () => {
    setTodoState(!todoState); // 현재 todoState 값의 반대로 설정
  };

  return (
    <Wrapper onClick = {changeState}>
      <Text todoState = {todoState}>
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
  font-size: 2.5rem;
  ${(props) =>
    props.todoState &&
    `
    text-decoraton: line-through;
    color: #ccc;
  `}
`;

const DeleteButton = styled.button`
  width: fit-content;
  heihgt: fit-content;
  margin-left: 1rem;
`;