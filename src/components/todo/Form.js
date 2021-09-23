import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.

export default function Form() {
  const [openForm, setOpenForm] = useState(false);
  const onToggle = () => setOpenForm(!openForm);

  return (
    <>
      <FormBlock>
        <AddButton onClick={onToggle} openForm={openForm}>
          <MdAdd />
        </AddButton>
      </FormBlock>
      {openForm && (
        <InputBlock>
          <InputForm>
            <Input
              autoFocus
              placeholder="할 일을 입력한 후, 엔터키를 누르세요."
            ></Input>
            <InputButton>추가</InputButton>
          </InputForm>
        </InputBlock>
      )}
    </>
  );
}

const FormBlock = styled.div`
  border: 1px solid black;
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
  width: 100%;
  border: 3px solid red;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const InputForm = styled.form`
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  background: gray;
`;

const Input = styled.input`
  width: 84%;
  outline: none;
  box-sizing: border-box;
  padding: 1rem;
`;

const InputButton = styled.button`
  width: 15%;

  outline: none;
  border: none;
  cursor: pointer;
`;
