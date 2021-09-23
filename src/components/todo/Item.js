import styled, { css } from "styled-components";
import { MdCheck } from "react-icons/md";
// 각 할 일에 대한 정보

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ id, done, text }) {
  return (
    <TodoItem>
      <CheckCircle done={done}>{done && <MdCheck />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <DeleteButton>삭제</DeleteButton>
    </TodoItem>
  );
}

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
`;

const CheckCircle = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 20px;
  color: red;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
  margin-left: 1rem;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  flex: 1;
  font-size: 15px;
  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
`;

const DeleteButton = styled.button`
  color: red;
  margin-right: 10px;
`;
