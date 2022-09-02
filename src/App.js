import "./styles.css";
import { useState } from "react";

export default function App() {
  const todos = [
    {
      id: 1,
      title: "NeoG assignments",
      completed: false
    },
    {
      id: 2,
      title: "Pair programming session",
      completed: true
    },
    {
      id: 3,
      title: "Project submission",
      completed: false
    },
    {
      id: 4,
      title: "Coding practice",
      completed: true
    }
  ];
  const [toDoData, setTodoData] = useState(todos);
  function showAll() {
    setTodoData(todos);
  }
  function showCompleted() {
    const completedTodos = todos.filter((item) => item.completed === true);
    setTodoData(completedTodos);
  }
  function showIncomplete() {
    const inCompleteTodos = todos.filter((item) => item.completed === false);
    setTodoData(inCompleteTodos);
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo List</h2>
      <div style={{ textAlign: "center" }}>
        <button onClick={showAll}>Show All Todos</button>{" "}
        <button onClick={showCompleted}>Show Completed Todos</button>{" "}
        <button onClick={showIncomplete}>Show Incomplete Todos</button>
      </div>
      {toDoData.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
