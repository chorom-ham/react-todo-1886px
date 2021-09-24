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
  width: 65%;
  min-height: 80rem;
  margin: 5rem auto;
  background-color: white;
  border-radius: 3rem;
  padding: 4rem 2rem 0;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  margin: 1.5rem 0 0 1rem;
  color: rgb(7, 26, 82);
`;

export default Todo;