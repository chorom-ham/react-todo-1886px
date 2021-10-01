import styled from "styled-components";

export default function Header() {
  return <StlyedHeader>React.js로 만든 TO-DO APP</StlyedHeader>;
}

const StlyedHeader = styled.header`
  background-color: #ff7878;
  color: #ffffff;
  @font-face {
    font-family: "SLEIGothicTTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SLEIGothicTTF.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "SLEIGothicTTF";
  font-size: 2rem;
  height: 7rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
`;
