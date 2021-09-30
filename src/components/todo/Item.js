import { useRef } from "react";
import styled from "styled-components";
import Todo from "./Todo";
// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ title, index }) {
  return (
    <Wrapper>
      <Text>
        {index + 1}.{title}
      </Text>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Text = styled.div``;
