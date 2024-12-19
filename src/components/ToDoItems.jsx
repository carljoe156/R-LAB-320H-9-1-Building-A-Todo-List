import React, { useState } from "react";
import ActionButton from "./ActionButton";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";

function ToDoItems({ task, dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  // Handle editing the task title
  const handleEdit = () => {
    dispatch({
      type: "edit-task",
      payload: { taskId: task.id, newTitle },
    });
    setEditMode(false); // Exit edit mode after saving the task
  };

  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <div>
        <b>
          Task:{" "}
          {editMode ? (
            <TextInput state={newTitle} setState={setNewTitle} />
          ) : (
            task.title
          )}
        </b>
      </div>
      <div>
        <b>Completed: {task.completed ? "Yes" : "No"}</b>
      </div>

      <div>
        <CheckBox
          state={task.completed}
          setState={(newState) => {
            dispatch({
              type: "toggle-task-complete",
              payload: { taskId: task.id },
            });
          }}
        />
        {task.completed ? "Completed" : "Not Completed"}
      </div>

      <ActionButton
        onClick={() => {
          if (editMode) {
            handleEdit(); // Save the new title
          } else {
            setEditMode(true); // Enable editing
          }
        }}
      >
        {editMode ? "Save" : "Edit"}
      </ActionButton>

      <ActionButton
        type="remove-task"
        payload={{ taskId: task.id }}
        dispatch={dispatch}
        disabled={!task.completed}
      >
        Delete
      </ActionButton>
    </div>
  );
}

export default ToDoItems;
