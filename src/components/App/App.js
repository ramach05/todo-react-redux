import React from "react";

import "./App.css";

function AppHeader() {
  return (
    <header className="">
      <div className="">header</div>
      <h1 className="header-title">My Todo List</h1>
    </header>
  );
}
function AppMain() {
  return (
    <main className="">
      <div className="">main</div>
      <form>
        <input className="" placeholder="asd" />
      </form>
      <TodoListItems />
    </main>
  );
}
function AppFooter() {
  return (
    <footer className="">
      <div className="">footer</div>
    </footer>
  );
}
function TodoListItems() {
  return (
    <ul className="">
      <TodoItem />
      <TodoItem />
    </ul>
  );
}
function TodoItem() {
  return (
    <li className="">
      <div className="">123</div>
    </li>
  );
}

function App() {
  return (
    <div className="body">
      <div className="page">
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
