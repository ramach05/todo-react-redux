import React from "react";

import "./TodoListItems.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoListItems() {
  return (
    <ul className="">
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoListItems;
