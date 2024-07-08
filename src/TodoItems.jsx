import React from "react";

function TodoItems({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => {
              toggleTodo(todo.id);
            }}
          />
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(({ todos, toggleTodo }) => {
  return <TodoItems todos={todos} toggleTodo={toggleTodo} />;
});
