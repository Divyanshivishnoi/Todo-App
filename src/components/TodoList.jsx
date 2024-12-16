import React, { useState } from "react";
import Input from "./Input";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodo([...todo, inputValue]);
      setInputValue("");
    } else if (e.key === "Enter") {
      console.log("Please enter a valid task.");
    }
  };


  const markCompleted = () => {
    setTodo(todo.map((item)=>({...item, completed: true})));
  };

  const clearCompleted = () => {
    setTodo(todo.filter((item) => !item.completed));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Todo List</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleSubmit}
          onKeyPress={handleAddTodo}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />
   <Input todo={todo} setTodo={setTodo}/>



   {/* // Add the Button component here */}
   <div className="flex justify-center items-center space-x-4 mt-5">
  <button className="bg-green-500 text-white text-sm px-3 py-1 rounded-lg shadow hover:bg-green-600 focus:ring-2 focus:ring-green-300 mb-4" onClick={markCompleted}>
    Mark All Completed
  </button>
  <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-lg shadow hover:bg-red-600 focus:ring-2 focus:ring-red-300 mb-4" onClick={clearCompleted}>
    Clear Completed
  </button>
  <h2 className="ml-auto mb-4">Remaining Todos</h2>
</div>



     
      </div>
    </div>
  );
};

export default TodoList;



