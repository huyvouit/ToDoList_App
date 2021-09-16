import React, { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { todoReducer } from "../reducer/todoReducer";
import { GET_TODO, SET_TODO } from "../reducer/type";

export const TodoContext = createContext();
export const TodoContextProvider = ({ children }) => {
  const [todo, dispatch] = useReducer(todoReducer, []);

  //State
  // const [todo, setTodo] = useState([[]]);

  // const addTodo = (newTodo) => {
  //   setTodo([...todo, newTodo]);
  // };

  // const deleteTodo = (id) => {
  //   setTodo(todo.filter((todo) => todo.id !== id));
  // };
  // //set todos into localStorage
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todo));
  // }, [todo]);

  // useEffect to get todo in localStorage
  useEffect(() => {
    dispatch({
      type: GET_TODO,
      payload: null,
    });
  }, []);

  // //set todos into localStorage
  useEffect(() => {
    dispatch({
      type: SET_TODO,
      payload: { todo }, // payload: {todo: todo}
    });
  }, [todo]);

  //Context data
  const TodoContextData = {
    todo,
    dispatch,
  };

  //Return provider
  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
