import { createContext, useState } from "react";

// Create the context
const TodoContext = createContext();



// Create a provider component
const TodoProvider = ({Children}) => {
  const [data, setData] = useState(["breakfast", "lunch", "dinner"]);

  return (
    <TodoContext.Provider value={{ data, setData }}>
      {Children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
