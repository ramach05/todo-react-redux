import React from "react";

import "./TodoListItems.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoListItems() {
  return (
    <ul className="list-group">
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoListItems;
