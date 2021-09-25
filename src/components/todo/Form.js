import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";


const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0rem;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 2.5rem;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top: 0.1rem solid #e9ecef;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 4rem;
  border: 0.75rem solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 2rem;
  box-sizing: border-box;
  height: 5rem;
`;

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.


export default function Form() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const todoInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let {value} = todoInput.currrent;
    pushTodo(value);
    todoInput.current.value = "";
  }
  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };
 
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
