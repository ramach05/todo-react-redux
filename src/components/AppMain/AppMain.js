import React from "react";

import "./AppMain.css";
import TodoListItems from "../TodoListItems/TodoListItems";
import Filter from "../Filter/Filter";
import CounterTodos from "../CounterTodos/CounterTodos";

function AppMain() {
  return (
    <main className="main">
      <article>
        <section>
          <Filter />
          <CounterTodos />
          <TodoListItems />
        </section>
      </article>
    </main>
  );
}

export default AppMain;
