import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };


  const addTodo =  useCallback(()=>{
    setTodo((prevState)=>[...prevState, 'NewTodo'])} ,[todo])
  


  return (
    <>
      <div className="flex flex-col items-center">
        <div>{count}</div>
        <button className="bg-red-700 text-white px-6 py-2" onClick={increment}>
          Increment
        </button>
        <Todos todo={todo} addTodo={addTodo} />
      </div>
    </>
  );
};

export default UseCallback;
