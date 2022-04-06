import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.

export default function Form() {
  return (
    <TodoForm>
      <TextInput placeholder="할 일을 입력하세요" />
      <SubmitButton>추가</SubmitButton>
    </TodoForm>
  );
}

const TodoForm = styled.form`
  width: 95%;
  margin: 3rem auto;
`;
const TextInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  border: 1rem solid #00462a;
  width: 90%;
  padding: 1rem;
  font-size: 2rem;
`;
const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
}))`
  border: 1rem solid #00462a;
  width: 10%;
  padding: 1rem;
  font-size: 2rem;
`;
