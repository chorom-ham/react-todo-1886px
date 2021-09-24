import styled, {css} from "styled-components";
import {FaRegCircle, FaTimesCircle} from "react-icons/fa";
import {useState} from "react";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({content, todoList, setTodoList, TodoList}) {
    const [state, setState] = useState('undone');

    const changeState = () => {
        setState(state === 'undone' ? 'done' : 'undone');
    };

    const removeItem = (e) => {
        // const currentIndex = todoList.indexOf(content);
        // const updatedList = todoList.splice(currentIndex, 1);
        // setTodoList(updatedList);
        setTodoList(todoList.filter(item => item !== content));
    };

    return (
        <StyledItem value={state}>
            <ContentButton value={state} onClick={changeState}>
                <ContentIcon value={state}/>
                <ContentText>{content}</ContentText>
            </ContentButton>
            <RemoveItemButton value={state} onClick={removeItem}>
                <RemoveItemIcon value={state} />
            </RemoveItemButton>
        </StyledItem>
    );
}

const StyledItem = styled.div`
  display: inline-flex;
  height: fit-content;
  width: 98%;
  padding: 0 0 0 2rem;
  margin: 0rem auto 0.8rem;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  align-items: center;
  transition-duration: 0.2s;
  background-color: white;
  border: 1px solid rgb(57,81, 156);
  
  &:hover{
    border-color: #f63af0;
  }
  
  ${props => 
    props.value === 'done' &&
    css`
      border-color: rgb(84, 126, 255, 0.1);
      background-color: rgb(84, 126, 255, 0.1);
      &:hover{
        border-color: #f63af0;
      }
    `}
`;

const ContentButton = styled.button`
  display: inline-flex;
  align-items: center;
  flex-grow: 1;
  border: none;
  background-color: transparent;
  padding: 1.5rem 0;
  font-size: 1.5rem;
  
  //text css
  ${props => 
    props.value === 'done' && 
    css`
      text-decoration: line-through;
      text-decoration-color: rgb(84, 126, 255, 0.5);
      font-style: italic;
      color: rgb(84, 126, 255, 0.5);
    `}
`;

const ContentText = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-align: left;
`;

const ContentIcon = styled(FaRegCircle)`
  min-width: 2rem;
  min-height: 2rem;
  margin-right: 1.5rem;
  fill: #f63af0;

  ${props => 
    props.value === 'done' && 
    css`
      fill: rgb(84, 126, 255, 0.5);
    `}
`;

const RemoveItemButton = styled.button`
  border: none;
  height: 4rem;
  width: 5rem;
  margin-left: 0.5rem;
  background-color: transparent;

  &:hover{
    svg{
      fill: rgb(7, 26, 82);
      
      ${props =>
              props.value === 'done' &&
              css`
          fill: rgb(57,81, 156);
    `}
    }
  }
`;

const RemoveItemIcon = styled(FaTimesCircle)`
  width: 1.5rem;
  height: 1.5rem;
  transition-duration: 0.1s;
  fill: transparent;
`;

