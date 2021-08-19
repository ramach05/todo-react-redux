import React from "react";

import "./TodoListItems.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoListItems() {
  return (
    <ul className="todo-list-items">
      <li>
        <TodoItem />
      </li>
      <li>
        <TodoItem />
      </li>
    </ul>
  );
}

export default TodoListItems;
