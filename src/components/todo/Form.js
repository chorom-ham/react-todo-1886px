import styled from "styled-components";
import {FaPlus} from "react-icons/fa";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form() {
  return (
      <StyledForm>
          <ItemInput type={'text'} placeholder={'할 일을 입력하세요'}/>
          <AddItemButton>
              <FaPlus />
          </AddItemButton>
      </StyledForm>
  );
}

const StyledForm = styled.div`
  display: inline-flex;
  background-color: rgb(156, 180, 249, 0.3);
  border-radius: 1.6rem;
  height: 4rem;
  padding: 1rem;
  align-items: center;
`;

const ItemInput = styled.input`
  ::placeholder {
    color: #bfcfff;
  }

  flex-grow: 1;
  margin-right: 1rem;
  border: none;
  outline: none;
  color: #bfcfff;
  padding-left: 1.5rem;
  font-style: italic;
  background-color: transparent;
`;

const AddItemButton = styled.button`
  background: transparent;
  border: none;
  transition-duration: 0.2s;
  color: white;
  padding-top: 0.2rem;
  
  &:hover {
    color: rgb(215, 58, 246);
  }
`;