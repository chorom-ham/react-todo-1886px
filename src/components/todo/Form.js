import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form({ text, onChange, onCreate }) {
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onCreate();
    }
  };
  return (
    <Wrapper>
      <InputText
        name="text"
        placeholder="할일을 입력하세요"
        onChange={onChange}
        onKeyDown={onKeyPress}
        value={text}
      />
      <AddButton onClick={onCreate}>ADD</AddButton>
      <Title>To do List</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem;
  width: 100%;
  height: 10rem;
  text-align: center;
`;

const InputText = styled.input`
  width: 30rem;
  height: 4rem;
  border-width: 0.2rem;
  border-color: #6495ed;
  border: 2rem;
`;

const AddButton = styled.button`
  font-size: 1.5rem;
  width: 7rem;
  height 4rem;
  color: #ffffff;
  border: 0;
  background-color:   #6495ED;
`;

const Title = styled.h1`
  margin: 3rem;
  font-size: 3rem;
  color: #6495ed;
`;
