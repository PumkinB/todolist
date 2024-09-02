import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleChange}>
      <input type="text" className="todo-input" placeholder="What is the task today?" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
