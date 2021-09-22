import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ todoList }) {
  return (
    <TodoLists>
      {todoList.map((todo, index) => (
        <TodoList key={todo.id}>
          <Checkbox type="checkbox" id={index} />
          <StyledLabel htmlFor={index}>{todo.value}</StyledLabel>
        </TodoList>
      ))}
    </TodoLists>
  );
}

const TodoLists = styled.div``;
const TodoList = styled.div``;
const Checkbox = styled.input``;
const StyledLabel = styled.label``;
