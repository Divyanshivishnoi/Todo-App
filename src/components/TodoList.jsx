import { useState } from "react";
import Input from "./Input";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Single state for all tasks
  const [filter, setFilter] = useState("all"); // Default filter is 'all'

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

  // Filter todos based on the filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // Default to 'all'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-500 to-gray-300 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500 p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List App
        </h1>

        {/* Input Field */}
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyPress={handleAddTodo}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />

        {/* Todo List */}
        <Input todos={filteredTodos} setTodos={setTodos} />

        {/* Buttons and Footer */}
        <div className="mt-6">
          {/* Action Buttons */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-gray-500 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-gray-600 focus:ring-2 focus:ring-green-300"
              onClick={markAllCompleted}
            >
              Mark All Completed
            </button>
            <button
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:ring-2 focus:ring-red-300"
              onClick={clearCompleted}
            >
              Clear Completed
            </button>
          </div>

          {/* Remaining Todos */}
          <h2 className="text-center text-gray-700 font-medium">
            Remaining Todos:{" "}
            <span className="font-bold text-gray-800">
              {todos.filter((todo) => !todo.completed).length}
            </span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex justify-center space-x-4 mt-6">
            <h2
              className={`cursor-pointer px-3 py-2 rounded-lg transition duration-200 `}
              onClick={() => setFilter("all")}
            >
              All
            </h2>

            <h2
              className={`cursor-pointer px-4 py-2 rounded-lg transition duration-200 `}
              onClick={() => setFilter("active")}
            >
              Active
            </h2>

            <h2
              className={`cursor-pointer px-4 py-2 rounded-lg transition duration-200 `}
              onClick={() => setFilter("completed")}
            >
              Completed
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
