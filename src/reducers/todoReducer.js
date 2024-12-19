export default function reducer(state, { type, payload }) {
  switch (type) {
    case "add-task": {
      const { title } = payload;

      if (title === "") {
        return state;
      }

      // Check if task with the same title already exists
      const hasThisTitle = state.some((task) => task.title === title);

      if (hasThisTitle) {
        alert(
          `There is already a task with the title "${title}". Differentiate them somehow!`
        );
        return state;
      }

      // Add new task to the top of the list
      return [{ id: Date.now(), title, completed: false }, ...state];
    }

    case "remove-task":
    case "delete-task": {
      const { taskId } = payload;
      return state.filter((task) => task.id !== taskId); // filter out the task with the given id
    }

    case "toggle-task-complete": {
      const { taskId } = payload;
      return state.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
    }

    case "edit-task": {
      const { taskId, newTitle } = payload;
      return state.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      );
    }

    default: {
      throw new Error(`Unknown action type: ${type}`);
    }
  }
}
