import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Item from "./Item";

function Todo() {
    const [todoList, setTodoList] = useState([]);

    const TodoList = () => {
        return (
            todoList.map((content, index) =>
                <Item content={content} todoList={todoList} setTodoList={setTodoList} reset={TodoList}/>
            )
        );
    };

    return (
        <StyledTodo>
            <Title>ToDo List</Title>
            <Form todoList={todoList} setTodoList={setTodoList}/>
            <TodoList />
        </StyledTodo>
    );
}

const StyledTodo = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  min-height: 80rem;
  margin: 7rem auto;
  background-color: white;
  border-radius: 3rem;
  padding: 5rem 4rem;
`;

const Title = styled.h1`
  font-size: 6.5rem;
  font-weight: 900;
  margin: 4rem 0 0 2rem;
  color: rgb(7, 26, 82);
`;

export default Todo;