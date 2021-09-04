import React, { useEffect, useState } from "react";

import "./CounterTodos.css";

function CounterTodos({ countTodos }) {
  const [isDone, setIsDone] = useState(false);

  const { countTotal, countDone } = countTodos;

  useEffect(() => {
    if (countTotal === countDone) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [countTotal, countDone]);

  function renderCounterTodos() {
    if (countTotal === 0) {
      return "Your Todo List is empty";
    }
    if (countTotal === 1 && isDone) {
      return "Your Todo is done";
    }
    if (isDone) {
      return `All ${countTotal} todos are done`;
    }
    return `${
      countTotal - countDone
    } more to do, ${countDone}/${countTotal} done`;
  }

  return (
    <section>
      <p className="counter-todos">{renderCounterTodos()}</p>
    </section>
  );
}

export default CounterTodos;
