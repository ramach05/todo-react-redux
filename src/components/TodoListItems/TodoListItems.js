import React from "react";

import "./TodoListItems.css";
import TodoItem from "../TodoItem/TodoItem";

const todoData = [
  { id: 1, title: "Lorem", important: false },
  { id: 2, title: "Задача asdasd", important: true },
];

function TodoListItems() {
  const todoItems = todoData.map((item) => {
    const { id, title, important } = item;

    return <TodoItem key={id} title={title} important={important} />;
  });

  return <ul className="todo-list-items">{todoItems}</ul>;
}

export default TodoListItems;
