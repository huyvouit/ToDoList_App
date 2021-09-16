import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../../context/TodoContext";
import { ADD_TODO } from "../../reducer/type";
const TodoForm = () => {
  // call TodoContext
  const { dispatch } = useContext(TodoContext);

  //state text input
  const [task, setTask] = useState("");

  const onTaskChange = (event) => {
    setTask(event.target.value);
  };

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: { todo: { id: uuidv4(), title: task } },
    });
    setTask("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="enter task"
          onChange={onTaskChange}
          value={task}
          required
        />
        <input type="submit" value="Add task" />
      </form>
    </>
  );
};

export default TodoForm;
