import React from "react";
import "./App.css";
import ToDoList from "./pages/ToDoList";
function App() {
  return (
    <>
      <div>
        <h1>
          <strong>Todo List</strong>
        </h1>
        <p>
          You have Tasks <br />
          Here's a Place to Put them !
        </p>
        <ToDoList />
      </div>
    </>
  );
}

export default App;
