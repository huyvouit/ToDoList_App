import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ? (
        <div className="todo-list">
          <TodoForm />
          <TodoItem />
        </div>
      ) : (
        <p style={{ "text-align": "center" }}>Please login</p>
      )}
    </>
  );
};

export default Todos;
