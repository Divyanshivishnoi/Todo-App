import React from "react";

const Input = ({ todos, setTodos }) => {
  const toggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-gray-100 rounded-lg mb-2 shadow-md"
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleted(index)}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring focus:ring-blue-500"
          />
          {/* Task Name */}
          <h3
            className={`flex-grow ml-3 text-lg ${
              todo.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {todo.name}
          </h3>
          {/* Dropdown */}
          <select className="border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <option>Green</option>
            <option>Purple</option>
            <option>Blue</option>
            <option>Red</option>
          </select>
          {/* Delete Button */}
          <button
            className="ml-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300"
            onClick={() => handleDelete(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Input;



