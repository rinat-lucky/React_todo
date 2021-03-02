import React, { useState, useRef } from 'react';
import styled from 'styled-components';

function AddTodoItem({addItem}) {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    addItem(value);
    setValue('');
    inputRef.current.focus();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={evt => {setValue(evt.target.value)}}
        ref={inputRef}
      />
      <Button>Add task</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  margin-bottom: 25px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 5px;
  color: #d3d3d3;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 5px 0 0 5px;
`;

const Button = styled.button`
  margin-left: -1px;
  padding: 0 10px;
  color: #d3d3d3;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export default AddTodoItem;