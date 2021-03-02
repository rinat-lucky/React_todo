import React, { useState } from 'react';
import { ReactComponent as Pencil } from '../assets/svg/pencil.svg';
import { ReactComponent as Trash } from '../assets/svg/trash.svg';
import styled from 'styled-components';
import TodoEditItem from './TodoEditItem';

function TodoItem({
  id,
  title,
  completed,
  completeItem,
  changeItem,
  deleteItem
}) {
  const [isEdit, setIsEdit] = useState(false);

  function closeEdit() {
    setIsEdit(false);
  }

  function saveEdit(newTitle) {
    changeItem(id, newTitle);
    closeEdit();
  }

  let inner;
  if (isEdit) {
    inner = (
      <TodoEditItem
        title={title}
        closeEdit={closeEdit}
        saveEdit={saveEdit}
      />
    );
  } else {
    inner = (
      <InnerItem>
        <Label>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {completeItem(id)}} 
          />
          <span style={{textDecoration: completed ? 'line-through': 'none'}}>{title}</span>
        </Label>
        <Controls>
          <Button
            onClick={() => {setIsEdit(true)}}
            children={<PencilWhite />}
          />
          <Button
            onClick={() => {deleteItem(id)}}
            children={<TrashDanger />}
          />
        </Controls>
      </InnerItem>
    );
  }

  return (
    <ListItem>
      {inner}
    </ListItem>
  );
}

const ListItem = styled.li`
  padding-bottom: 10px;
  border-bottom: 1px solid gray;

  + li {
    margin-top: 10px;
  }
`;

const InnerItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: center;
  gap: 15px;
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
`;

const Button = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PencilWhite = styled(Pencil)`
  fill: #fff;
`;

const TrashDanger = styled(Trash)`
  fill: #dc3545;
`;


export default TodoItem;