"use client";

import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

interface Todo {
  id: string;
  todo: string;
}

const TodoComponent: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditTodo, setIsEditTodo] = useState(false);
  let [foundTodo, setFoundTodo] = useState<Todo | undefined>();

  const addTodo = () => {
    const todo = {
      id: v4(),
      todo: inputVal,
    };
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify(todos));
    setInputVal("");
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const editTodo = (id: string) => {
    setIsEditTodo(true);
    setFoundTodo(todos.find((todo) => todo.id === id));
    if (foundTodo) setInputVal(foundTodo.todo);
  };

  const saveTodo = () => {
    if (foundTodo) {
      setFoundTodo({
        id: foundTodo.id,
        todo: inputVal,
      });

      setTodos(
        todos.map((todo) => {
          if (todo.id === foundTodo?.id) {
            todo.todo = foundTodo?.todo;
          }
          return todo;
        })
      );
      setIsEditTodo(false);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) setTodos(JSON.parse(localTodos));
  }, []);

  return (
    <div>
      <h1>TODO APP</h1>

      <div className="flex w-full mt-20 items-center justify-center">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        {isEditTodo ? (
          <button className="ml-2" onClick={saveTodo}>
            save todo
          </button>
        ) : (
          <button className="ml-2" onClick={addTodo}>
            add todo
          </button>
        )}
      </div>

      <div className="flex flex-col my-3 gap-3 items-center justify-center">
        {todos?.map((todo, i) => (
          <div className="flex items-center gap-5" key={i}>
            {/* {isEditTodo ? (
              <input
                type="text"
                value={editInputVal}
                onChange={(e) => {
                  e.target.value;
                }}
              />
            ) : ( */}
            <p className="flex items-center text-lg">{todo.todo}</p>
            {/* )} */}
            <button onClick={() => deleteTodo(todo.id)}>delete todo</button>
            {/* {isEditTodo ? (
              <button onClick={() => saveTodo(todo.id)}>save todo</button>
            ) : ( */}
            <button onClick={() => editTodo(todo.id)}>edit todo</button>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoComponent;
