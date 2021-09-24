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
  width: 50%;
  margin: 10rem auto;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

export default Todo;