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
  const [todoData, setTodoData] = useState(initialTodoData);

  console.log("todoData :>> ", todoData);

  function renderTodoItems() {
    return todoData.map((item) => {
      const { id, title, important } = item;
      return (
        <TodoItem
          key={id}
          title={title}
          important={important}
          onDeleted={() => handleDeletItem(id)}
        />
      );
    });
  }

  function handleDeletItem(id) {
    setTodoData((currTodos) => {
      const targetIndex = currTodos.findIndex((item) => item.id === id);
      const newTodosBefore = currTodos.slice(0, targetIndex);
      const newTodosAfter = currTodos.slice(targetIndex + 1);

      return [...newTodosBefore, ...newTodosAfter];
    });
  }

  return <ul className="todo-list-items">{renderTodoItems()}</ul>;
}

export default TodoListItems;
