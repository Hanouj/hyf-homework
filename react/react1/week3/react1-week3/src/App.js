import React from "react";
import { useState, useEffect, useCallback } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./App.css";
import Timer from "./components/Timer";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const fetchTodos = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const buttonAddClick = (e) => {
    if (!deadline || !description) {
      alert("Add both description and deadline!");
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          description: description,
          deadline: deadline,
        },
      ]);
    }
  };

  return (
    <div className="wrapper">
      <TodoHeader />
      <Timer />
      <div>
        <label>Todo Description: </label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="description"
        />
      </div>
      <br />
      <div>
        <label>Deadline: </label>
        <input
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
          value={deadline}
          type="date"
        />
      </div>
      <br />
      <button className="btn-add" onClick={buttonAddClick}>
        Add todo
      </button>

      {todos.length <= 0 && <p>No Items!</p>}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
