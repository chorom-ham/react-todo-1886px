import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.

export default function Form({ todoList, setTodoList }) {
  const [openForm, setOpenForm] = useState(false);
  const toggleInputForm = () => setOpenForm(!openForm);

  const [value, setValue] = useState("");

  const changeInputText = (e) => {
    setValue(e.target.value);
  };

  const submitItem = (e) => {
    const renew = [...todoList, value];
    setTodoList(renew);
    setValue("");
  };

  const enterSubmit = (e) => {
    if (e.key == "Enter") {
      submitItem();
    }
  };

  return (
    <>
      <FormBlock>
        <AddButton onClick={toggleInputForm} openForm={openForm}>
          <MdAdd />
        </AddButton>
      </FormBlock>
      {openForm && (
        <InputBlock>
          <Input
            autoFocus
            placeholder={"할 일을 입력한 후, 엔터키를 누르세요."}
            onChange={changeInputText}
            onKeyDown={enterSubmit}
            value={value}
          />
          <InputButton onClick={submitItem}>추가</InputButton>
        </InputBlock>
      )}
    </>
  );
}

const FormBlock = styled.div`
  width: 100%;
  height: 6rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const AddButton = styled.button`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 4rem;
  color: white;
  background-color: #f8e0e6;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: absolute;
  margin: auto;
  left: 50%;
  &:hover {
    background-color: #f7819f;
  }
  &:active {
    background-color: #fa5882;
  }

  ${(props) =>
    props.openForm &&
    css`
      background-color: #cef6f5;

      &:hover {
        background-color: #a9f5f2;
      }
      &:active {
        background-color: #2efef7;
      }
      transform: rotate(45deg);
    `}
`;

const InputBlock = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  justify-content: space-between;
  background-color: #f8e0e6;
`;

const Input = styled.input`
  width: 84%;
  outline: none;
  box-sizing: border-box;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
`;

const InputButton = styled.button`
  width: 15%;
  outline: none;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;
