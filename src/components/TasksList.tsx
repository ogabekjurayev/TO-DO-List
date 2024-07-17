import Task from "./Task";

export default function TasksList({ todos, editFunc, deleteFunc }) {
  return (
    <div className="tasks">
      <ul>
        {todos.map((todo) => (
          <Task
            todo={todo}
            editFunc={editFunc}
            deleteFunc={deleteFunc}
            key={todo.id}
          />
        ))}
        {todos.length == 0 && <h4 className="not-found">No tasks found</h4>}
      </ul>
    </div>
  );
}
