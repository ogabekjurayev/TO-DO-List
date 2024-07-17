import MyButton from "./MyButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export default function Task({ todo, editFunc, deleteFunc }) {
  return (
    <li className="task">
      <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        overlay={<Tooltip className="">{todo.todo}</Tooltip>}
      >
        <h4>{todo.todo}</h4>
      </OverlayTrigger>
      <div className="task-actions">
        <MyButton func={() => editFunc(todo)} text="Edit" />
        <MyButton func={() => deleteFunc(todo.id)} text="Delete" />
      </div>
    </li>
  );
}
