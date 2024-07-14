import { useEffect, useState } from "react";
import "./App.css";

import NewTodoInput from "./components/NewTodoInput";
import TasksList from "./components/TasksList";

export default function App() {
  const [todos, setTodos] = useState<{ id: number; todo: string }[]>([]);
  const [newTodo, setNewtodo] = useState("");
  const [editingTaskId, setEditingTaskID] = useState<number | null>(null);

  function editButtonClick(task: { id: number; todo: string }) {
    setEditingTaskID(task.id);
    setNewtodo(task.todo);
  }

  function editFunc() {
    const editingTaskIndex = todos
      .map((todo) => todo.id)
      .indexOf(editingTaskId || 0);
    todos[editingTaskIndex].todo = newTodo;
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    setEditingTaskID(null);
    setNewtodo("");
  }

  function addTask() {
    if (newTodo != "" && !/^\d+$/.test(newTodo)) {
      setTodos((prev) => {
        const current = [...prev, { id: Math.random(), todo: newTodo }];
        localStorage.setItem("todos", JSON.stringify(current));
        setNewtodo("");
        return current;
      });
    } else {
      alert("Task should contian at least one letter");
    }
  }
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  function deleteTask(taskID: number) {
    setTodos((prev) => {
      const current = prev.filter((todo) => todo.id != taskID);
      localStorage.setItem("todos", JSON.stringify(current));
      return current;
    });
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>To Do List</h1>
        </div>

        <NewTodoInput
          editFunc={editFunc}
          editID={editingTaskId}
          val={newTodo}
          setVal={setNewtodo}
          addFunc={addTask}
        />
        <TasksList
          todos={todos}
          editFunc={editButtonClick}
          deleteFunc={deleteTask}
        />
      </div>
    </>
  );
}
