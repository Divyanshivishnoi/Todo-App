import React from "react";
import TodoList from "./components/TodoList";
import { useState } from "react";
import Input from "./components/Input";


const App = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div>

      <TodoList setFilter={setFilter} />
      
    </div>
  );
};

export default App;
