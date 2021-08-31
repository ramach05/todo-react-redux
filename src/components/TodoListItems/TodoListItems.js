import React, { useState } from "react";

import "./TodoListItems.css";
import TodoItem from "../TodoItem/TodoItem";
import todoAddIcon from "../../images/svg/task_add_24dp.svg";

const initialTodoData = [
  { id: 1, title: "Сходить в магазин", important: false },
  { id: 2, title: "Позвонить маме", important: true },
  { id: 3, title: "Сделать ДЗ", important: false },
  { id: 4, title: "Погладить рубашку", important: false },
];

let newTodoId = 100; // начало отсчета id новых задач (для передачи его в key)

function TodoListItems() {
  const [todoData, setTodoData] = useState(initialTodoData);

  console.log("todoData :>> ", todoData);
  console.log("newTodoId :>> ", newTodoId);

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

  function handleAddTodo(text) {
    console.log("text :>> ", text);

    setTodoData((currTodos) => {
      return [
        ...currTodos,
        {
          id: newTodoId++,
          title: text.trim(),
          important: false,
        },
      ];
    });
  }

  return (
    <>
      <ul className="todo-list-items">{renderTodoItems()}</ul>

      <button
        type="button"
        className="todo-item__btn"
        onClick={() => handleAddTodo("hello world")}
      >
        <img src={todoAddIcon} alt="add todo." className="todo-item__icon" />
        <div className="todo-item__btn-hint">add Todo</div>
      </button>
    </>
  );
}

export default TodoListItems;
