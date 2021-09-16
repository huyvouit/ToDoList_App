import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemContext";
import { TodoContext } from "../../context/TodoContext";
import { DELETE_TODO } from "../../reducer/type";
const TodoItem = () => {
  // call ThemeContext
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  //call TodoContext
  const { todo, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {todo.map((todo) => (
        <li
          key={todo.id}
          style={style}
          onClick={() => {
            dispatch({
              type: DELETE_TODO,
              payload: { id: todo.id },
            });
          }}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
