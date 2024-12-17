import React from "react";

const Input = ({ todos, setTodos }) => {

  const colors = [
    { name: "Green", colorClass: "green" },
    { name: "Purple", colorClass: "purple" },
    { name: "Blue", colorClass: "blue" },
    { name: "Red", colorClass: "red" },
  ];


  const toggleCompleted = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task
  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  // Change color of a task
  const handleColorChange = (index, color) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, color } : todo))
    );
  };

  // Filter tasks by color
  const filterByColor = (color) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.color === color));
  };

  return (
    <div>
      {/* Task List */}
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
            className="form-checkbox h-4 w-4 text-blue-600 focus:ring focus:ring-blue-500"
          />
          {/* Task Name */}
          <h3
            className={`flex-grow ml-3 text-lg ${
              todo.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {todo.name}
          </h3>
          {/* Color Selector */}
          <select
            className="border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-500"
            value={todo.color || ""}
            onChange={(e) => handleColorChange(index, e.target.value)}
          >
            <option value="">Select Color</option>
            {colors.map(({ name, colorClass }) => (
              <option key={colorClass} value={colorClass}>
                {name}
              </option>
            ))}
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

      {/* Filter Buttons */}
      <div className="mt-4 flex flex-col gap-4 justify-end h-full">
        {colors.map(({ name, colorClass }) => (
          <button
            key={colorClass}
            className={`w-28 h-10 text-white rounded-lg shadow-md bg-${colorClass}-500 hover:bg-${colorClass}-600 focus:ring focus:ring-${colorClass}-300`}
            onClick={() => filterByColor(colorClass)}
          >
            Show {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Input;


