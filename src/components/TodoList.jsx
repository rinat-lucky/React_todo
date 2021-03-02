import React, { useState } from 'react';
import styled from 'styled-components';
import AddTodoItem from './AddTodoItem';
import TodoItem from './TodoItem';

function TodoList() {
  const [list, setList] = useState([
    {id: 1, title: 'Store banana', completed: false},
    {id: 2, title: 'Game', completed: true},
  ]);

  function completeItem(id) {
    setList(prevState => {
      return prevState
        .map(item => {
          if (item.id === id) {
            return {...item, completed: !item.completed};
          }
          return item;
        });
    });
  }

  function changeItem(id, newTitle) {
    setList(prevState => {
      return prevState
        .map(item => {
          if (item.id === id) {
            return {...item, title: newTitle};
          }
          return item;
        });
    });
  }

  function addItem(title) {
    if (!title) return;

    setList(prevState => prevState.concat({
      id: Date.now(),
      title,
      completed: false
    }));
  }

  function deleteItem(id) {
    setList(prevState => prevState.filter(item => item.id !== id));
  }

  let listItems;
  if (list.length) {
    listItems = (
      list.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          completeItem={completeItem}
          changeItem={changeItem}
          deleteItem={deleteItem}
        />
      ))
    );
  } else {
    listItems = <p>Empty</p>;
  }

  return (
    <>
      <AddTodoItem addItem={addItem} />

      <List>
        {listItems}
      </List>
    </>
  );
}

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export default TodoList;