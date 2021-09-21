import styled from "styled-components";

export default function Header() {
  return <StlyedHeader>React.js로 만든 TO-DO APP</StlyedHeader>;
}

const StlyedHeader = styled.header`
  @font-face {
    font-family: 'S-CoreDream-2ExtraLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-2ExtraLight.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  font-family: 'S-CoreDream-2ExtraLight';
  
  background-color: #00462a;
  color: #ffffff;
  font-size: 2rem;
  height: 7rem;
  display: flex;
  align-items: center;
  padding-left: 5rem;
`;
