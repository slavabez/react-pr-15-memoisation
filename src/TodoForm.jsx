import { useState } from "react";

export default function TodoForm({ addTodo }) {
  console.log("TodoForm is rendering...");
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text) {
          addTodo(text);
          setText("");
        }
      }}
    >
      <label>
        New todo
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
