import React from "react";

import "./TodoListItems.css";

function TodoListItems({ renderTodoItems }) {
  return (
    <section>
      <ul className="todo-list-items">{renderTodoItems()}</ul>
    </section>
  );
}

export default TodoListItems;
