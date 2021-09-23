import styled, {css} from "styled-components";
import {FaRegCircle, FaTimesCircle as RemoveItemIcon} from "react-icons/fa";
import {useRef, useState} from "react";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({content}) {
    const [state, setState] = useState('undone');

    const changeState = () => {
        setState(state === 'undone' ? 'done' : 'undone');
    };

    return (
        <StyledItem value={state}>
            <ContentButton value={state} onClick={changeState}>
                <ContentIcon value={state}/>
                {content}
            </ContentButton>
            <RemoveItemButton value={state}>
                <RemoveItemIcon />
            </RemoveItemButton>
        </StyledItem>
    );
}

const StyledItem = styled.div`
  display: inline-flex;
  height: 5rem;
  width: 98%;
  padding: 0 2rem;
  margin: 0.3rem auto;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  align-items: center;
  transition-duration: 0.2s;
  background-color: rgb(7, 26, 82);
  
  &:hover{
    box-shadow: 0 0 4px 2px rgb(215, 58, 246);
  }
  
  ${props => 
    props.value === 'done' &&
    css`
      background-color: rgb(7,26,82, 0.5);
    `}
`;

const ContentButton = styled.button`
  display: inline-flex;
  align-items: center;
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: white;
  
  //text css
  ${props => 
    props.value === 'done' && 
    css`
      text-decoration: line-through;
      text-decoration-color: #bfcfff;
      font-style: italic;
      color: #bfcfff;
    `}
`;

const ContentIcon = styled(FaRegCircle)`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  fill: rgb(215, 58, 246);

  ${props => 
    props.value === 'done' && 
    css`
      fill: rgb(0, 91, 210);
    `}
`;

const RemoveItemButton = styled.button`
  border: none;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 0.5rem;
  background-color: transparent;
  
  svg{
    fill: white;
  }
`;

