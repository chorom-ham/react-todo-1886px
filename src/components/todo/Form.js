import styled from "styled-components";
import {FaPlus} from "react-icons/fa";
import {useState} from "react";

export default function Form({todoList, setTodoList}) {
    const [text, setText] = useState('');
    const changeInputText = (e) => {
        setText(e.target.value);
    };

    const addItemToList = (e) => {
        const updatedList = [
            ...todoList,
            text
        ]
        setTodoList(updatedList);
        setText('');
    };

    const onEnter = (e) => {
        if (e.key == 'Enter') {
            addItemToList();
        }
    };

    return (
        <StyledForm>
            <ItemInput type={'text'} placeholder={'할 일을 입력하세요'} onChange={changeInputText} onKeyDown={onEnter} value={text}/>
            <AddItemButton onClick={addItemToList}>
                <FaPlus/>
            </AddItemButton>
        </StyledForm>
    );
};

const StyledForm = styled.div`
  display: inline-flex;
  background-color: rgb(8, 31, 99);
  border-radius: 5rem;
  padding: 1.3rem;
  align-items: center;
  margin: 0.5rem 0 1rem;
  color: white;
`;

const ItemInput = styled.input`
  ::placeholder {
    color: rgb(194, 209, 255, 0.5);
  }
  
  color: white;
  flex-grow: 1;
  margin-right: 1rem;
  border: none;
  outline: none;
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