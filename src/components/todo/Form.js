import styled from "styled-components";

// Hint: Form, Input, Button
// 반드시 투두를 등록하는 버튼을 구현합니다.
// 엔터를 눌렀을 때도 투두가 등록되도록 합니다.
export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const toDoInput = event.target.firstChild;
    console.log(toDoInput.value);
    toDoInput.value = "";
  };
  return (
    <ToDoForm onSubmit={handleSubmit}>
      <ToDoInput type="text" placeholder="할 일을 입력하세요" />
      <AddButton>추가</AddButton>
    </ToDoForm>
  );
}

const ToDoForm = styled.form``;

const AddButton = styled.button``;

const ToDoInput = styled.input``;
