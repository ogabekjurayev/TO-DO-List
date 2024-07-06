import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  function addTask() {
    if (newTodo != "") {
      setTodos((prev) => {
        const current = [...prev, { id: Math.random(), todo: newTodo }];
        localStorage.setItem("todos", JSON.stringify(current));
        setNewtodo("");
        return current;
      });
    } else {
      alert("Task can not be empty");
    }
  }

  function handleEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key.toLocaleUpperCase() == "ENTER") {
      addTask();
    }
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  const [newTodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState<{ id: number; todo: string }[]>([]);

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="todo-input">
          <input
            value={newTodo}
            type="text"
            placeholder="Enter a task"
            onInput={(event: React.FormEvent<HTMLInputElement>) =>
              setNewtodo(event.currentTarget.value)
            }
            onKeyDown={handleEnterKey}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="tasks">
          <ul>
            {todos.map((todo) => (
              <li className="task" key={todo.id}>
                <h4>{todo.todo}</h4>
                <div className="task-actions">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </li>
            ))}
            {todos.length == 0 && <h4 className="not-found">No tasks found</h4>}
          </ul>
        </div>
      </div>
    </>
  );
}
