import MyButton from "./MyButton";
import React from "react";

export default function NewTodoInput({
  editID,
  editFunc,
  val,
  setVal,
  addFunc,
}) {
  function handleEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key.toLocaleUpperCase() == "ENTER") {
      if (editID == null) addFunc();
      else {
        editFunc();
      }
    }
  }

  return (
    <div className="todo-input">
      <input
        value={val}
        type="text"
        placeholder="Enter a task"
        onInput={(event: React.FormEvent<HTMLInputElement>) =>
          setVal(event.currentTarget.value)
        }
        onKeyDown={handleEnterKey}
      />
      {editID == null ? (
        <MyButton func={addFunc} text="Add Task" />
      ) : (
        <MyButton func={editFunc} text="Save" />
      )}
    </div>
  );
}
