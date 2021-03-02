import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Check } from '../assets/svg/check.svg';
import { ReactComponent as Close } from '../assets/svg/x.svg';

function TodoEditItem({title, closeEdit, saveEdit}) {
  const [value, setValue] = useState(title);

  function handleSubmit(evt) {
    evt.preventDefault();
    saveEdit(value);
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={evt => {setValue(evt.target.value)}}
      />
      <ButtonSucces type="submit" children={<CheckWhite />} />
      <ButtonDanger type="button" onClick={() => {closeEdit()}} children={<CloseWhite />} />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 5px;
`;

const Input = styled.input`
  margin-left: 40px;
  padding: 1px 0;
  color: #d3d3d3;
  background-color: transparent;
  border: none;
  outline: none;
`;

const Button = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ButtonSucces = styled(Button)`
  background-color: #198754;
`;

const ButtonDanger = styled(Button)`
  background-color: #dc3545;
`;

const CheckWhite = styled(Check)`
  fill: #fff;
`;

const CloseWhite = styled(Close)`
  fill: #fff;
`;

export default TodoEditItem;