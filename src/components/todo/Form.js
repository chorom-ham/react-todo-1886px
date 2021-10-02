import styled from "styled-components";
import React, { useState } from "react";

export default function Form(props) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const addList = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    props.onSubmit(value);
    setValue("");
  };

  return (
    <StyledForm onSubmit={addList}>
      <StyledInput onChange={onChange} value={value}></StyledInput>
      <StyledaddButton>추가</StyledaddButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  height: 7rem;
  align-items: center;
  padding: 1rem;
  margin: 2rem;
`;

const StyledInput = styled.input`
  font-size: 3rem;
  border: 0;
  flex: 1;
`;

const StyledaddButton = styled.button`
  font-size: 1.5rem;
  width: 5%;
  padding: 0.5rem;
  margin-left: 1rem;
`;