import styled from "styled-components";
import Todo from "./Todo";
// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ content }) {
  return (
    <div>
      <li>{content}</li>
    </div>
  );
}
