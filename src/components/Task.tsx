import MyButton from "./MyButton";
export default function Task({ todo, editFunc, deleteFunc }) {
  return (
    <li className="task">
      <h4>{todo.todo}</h4>
      <div className="task-actions">
        <MyButton func={() => editFunc(todo)} text="Edit" />
        <MyButton func={() => deleteFunc(todo.id)} text="Delete" />
      </div>
    </li>
  );
}
