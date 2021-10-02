import { useState } from "react";
import styled from "styled-components";

export default function Item(props) {
  const [line, setLine] = useState(false);

  return (
    <StyledLine>
      <StyledItem onClick={() => setLine(!line)} line={line}>
        {props.text}
      </StyledItem>
      <DeleteButton onClick={props.onClick}>X</DeleteButton>
    </StyledLine>
  );
}

const StyledLine = styled.div`
  margin: 1rem;
`;

const StyledItem = styled.span`
  font-size: 2rem;
  text-decoration: ${(props) => (props.line ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
`;

