import React from "react";
import { useReducer, useState } from "react";
import ActionButton from "../components/ActionButton";
import TextInput from "../components/TextInput";
import ToDoItems from "../components/ToDoItems";
import CheckBox from "../components/CheckBox";
import todoReducer from "../reducers/todoReducer";

// our array sample comes here

const initialState = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
  },
];

function ToDoList() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  // Function to handle adding a new task to the list
  const handleAddTask = () => {
    if (title.trim() === "") {
      alert("Please enter a task title.");
      return;
    }
    // Dispatch an action to add the new task to the list
    dispatch({
      type: "add-task",
      payload: { title, completed },
    });
    // Reset the input fields
    setTitle("");
    setCompleted(false);
  };

  const toDoList = todo.map((task) => {
    return <ToDoItems key={task.id} task={task} dispatch={dispatch} />;
  });

  return (
    <div>
      <TextInput state={title} setState={setTitle} />
      <br />
      <div>
        Completed: <CheckBox state={completed} setState={setCompleted} />
        {completed ? "Yes" : "No"}
      </div>
      {/* <ActionButton
        // type="add-task"
        // payload={{ title, completed }}
        // dispatch={dispatch}
        onClick={handleAddTask}
      >
        Add
      </ActionButton> */}
      <ActionButton onClick={handleAddTask}>Add</ActionButton>

      <div>{toDoList}</div>
    </div>
  );
}

export default ToDoList;
