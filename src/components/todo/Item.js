import styled from "styled-components";
import Todo from "./Todo";
// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ todo, key }) {
  const removeItem = () => {};
  return (
    <div>
      <ItemBlock>
        <li>
          {todo} <DeleteButton onClick={removeItem}>X</DeleteButton>
        </li>
      </ItemBlock>
    </div>
  );
}
const ItemBlock = styled.div``;
const DeleteButton = styled.button``;
