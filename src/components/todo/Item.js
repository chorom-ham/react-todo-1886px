import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ todoList, changeTodoState, removeTodoList }) {
  return (
    <TodoListWrapper>
      <TodoTitle>할 일 목록</TodoTitle>
      {todoList &&
        todoList.map((item) => (
          <TodoItemWrapper>
            <span onClick={(e) => changeTodoState(item.id)}>
              {item.isDone ? (
                <DoneTodoItem key={item.id}>{item.message} </DoneTodoItem>
              ) : (
                <span key={item.id}>{item.message}</span>
              )}
            </span>
            <RemoveButton
              onClick={(e) => {
                removeTodoList(item.id);
              }}
            >
              X
            </RemoveButton>
          </TodoItemWrapper>
        ))}
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.span`
  font-size: 2rem;
`;

const TodoTitle = styled.div`
  margin: 1.5rem;
  font-weight: bold;
`;

const TodoItemWrapper = styled.div`
  margin: 1.5rem 2rem;
`;

const DoneTodoItem = styled.span`
  text-decoration: line-through;
`;
const RemoveButton = styled.span`
  font-weight: bold;
  margin: 1.5rem;
  color: red;
`;
