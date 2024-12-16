import { useState } from "react";
import Input from "./Input";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Single state for all tasks
  console.log(todos);
  const handleAddTodo = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newTodo = { name: e.target.value.trim(), completed: false }; // New todo object
      setTodos([...todos, newTodo]);
      e.target.value = ""; // Clear input field
    } else if (e.key === "Enter") {
      console.log("Please enter a valid task.");
    }
  };

  const markAllCompleted = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Todo List</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyPress={handleAddTodo}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />
        <Input todos={todos} setTodos={setTodos} />

        <div className="flex justify-center items-center space-x-4 mt-5">
          <button
            className="bg-green-500 text-white text-sm px-3 py-1 rounded-lg shadow hover:bg-green-600 focus:ring-2 focus:ring-green-300 mb-4"
            onClick={markAllCompleted}
          >
            Mark All Completed
          </button>
          <button
            className="bg-red-500 text-white text-sm px-3 py-1 rounded-lg shadow hover:bg-red-600 focus:ring-2 focus:ring-red-300 mb-4"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
          <h2 className="ml-auto mb-4">
            Remaining Todos: {todos.filter((todo) => !todo.completed).length}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TodoList;




