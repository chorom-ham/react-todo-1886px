import styled from "styled-components";

export default function Header() {
  return <StyledHeader>React.js로 만든 TO-DO APP</StyledHeader>;
}

const StyledHeader = styled.header`
  @font-face {
    font-family: 'S-CoreDream-2ExtraLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-2ExtraLight.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  font-family: 'S-CoreDream-2ExtraLight';
  background-color: transparent;
  color: rgb(99, 123, 195);
  font-size: 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
`;
