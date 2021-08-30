import React, { useState } from "react";

import "./TodoListItems.css";
import TodoItem from "../TodoItem/TodoItem";

const initialTodoData = [
  { id: 1, title: "Lorem", important: false },
  { id: 2, title: "Задача asdasd", important: true },
  { id: 3, title: "Lorem фывфыв", important: false },
  { id: 4, title: "Задача asdasd фыфывф", important: false },
];

function TodoListItems() {
  const [todoData, setTodoData] = useState(
    initialTodoData.map((item) => {
      const { id, title, important } = item;

      return (
        <TodoItem
          key={id}
          title={title}
          important={important}
          onDeleted={() => handleDeletItem(id)}
        />
      );
    })
  );

  console.log("todoData :>> ", todoData);

  function handleDeletItem(id) {
    setTodoData((currTodos) => {
      const targetIndex = currTodos.findIndex(
        (item) => Number(item.key) === id
      );
      const newTodosBefore = currTodos.slice(0, targetIndex);
      const newTodosAfter = currTodos.slice(targetIndex + 1);

      return [...newTodosBefore, ...newTodosAfter];
    });
  }

  return <ul className="todo-list-items">{todoData}</ul>;
}

export default TodoListItems;
