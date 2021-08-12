import React from "react";

import "./AppMain.css";
import TodoListItems from "../TodoListItems/TodoListItems";

function AppMain() {
  return (
    <main>
      <article>
        <section className="">
          <div className="">main</div>

          <form className="">
            <input className="" placeholder="asd" />
          </form>

          <TodoListItems />
        </section>
      </article>
    </main>
  );
}

export default AppMain;
