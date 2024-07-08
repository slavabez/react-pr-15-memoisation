import React, { useState, useCallback, useMemo } from "react";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo item 1",
      isComplete: true,
    },
    {
      id: 2,
      title: "Todo item 2",
      isComplete: false,
    },
  ]);
  // "all" | "complete" | "incomplete"
  const [filter, setFilter] = useState("all");

  function filterTodos() {
    console.log("Filtering...");
    switch (filter) {
      case "complete":
        return todos.filter((todo) => todo.isComplete);
      case "incomplete":
        return todos.filter((todo) => !todo.isComplete);
      default:
        return todos;
    }
  }

  const filteredTodos = useMemo(filterTodos, [todos, filter]);

  const setFilterMemoised = useCallback((filter) => {
    setFilter(filter);
  }, []);

  const addTodoMemoised = useCallback(
    (todoText) => {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoText,
          isComplete: false,
        },
      ]);
    },
    [todos]
  );

  const toggleTodo = useCallback(
    (todoId) => {
      setTodos(
        todos.map((todo) =>
          todo.id !== todoId
            ? todo
            : {
                ...todo,
                isComplete: !todo.isComplete,
              }
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <TodoForm addTodo={addTodoMemoised} />
      <TodoFilter filter={filter} setFilter={setFilterMemoised} />
      <TodoItems todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoApp;
