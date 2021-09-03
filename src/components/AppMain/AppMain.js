import React, { useState } from "react";

import "./AppMain.css";
import TodoListItems from "../TodoListItems/TodoListItems";
import Filter from "../Filter/Filter";
import CounterTodos from "../CounterTodos/CounterTodos";
import AddSection from "../AddSection/AddSection";
import TodoItem from "../TodoItem/TodoItem";
import { initialTodoData } from "./../../utils/utils";

let newTodoId = 100; // начало отсчета id новых задач (для передачи его в key)

function AppMain() {
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

  function createNewTodoItem(title) {
    return {
      id: newTodoId++,
      title: title.trim(),
      important: false,
      done: false,
    };
  }

  function handleAddTodo(title) {
    setTodoData((currTodos) => {
      return [...currTodos, createNewTodoItem(title)];
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

  return (
    <main className="main">
      <article>
        <Filter />
        <CounterTodos />
        <TodoListItems renderTodoItems={renderTodoItems} />
        <AddSection handleAddTodo={handleAddTodo} />
      </article>
    </main>
  );
}

export default AppMain;
