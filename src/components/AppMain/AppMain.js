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
    <main className="main">
      <article>
        <section>
          <Filter />
          <CounterTodos />
          <TodoListItems renderTodoItems={renderTodoItems} />
          <AddSection handleAddTodo={handleAddTodo} />
        </section>
      </article>
    </main>
  );
}

export default AppMain;
