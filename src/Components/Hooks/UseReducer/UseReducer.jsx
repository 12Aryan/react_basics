import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log("state:", state);
  console.log("action:", action);

  switch (action.type) {
    case "INC":
      return (state += 1);

    case "DEC":
      return state > 0 ? (state -= 1) : 0;
    case "MUL":
      return (state *= state);
    case "INP":
      return (state = state + Number(action.payload));

    default:
      return state;
  }
};

const UseReducer = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(0);
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div>
      <h1>{state}</h1>
      <input value={input} type="number" className="border-black border-2" onChange={(e) => handleChange(e)} />
      <div className="flex justify-between">
        <button
          className="bg-black px-6 py-2 text-white"
          type="button"
          onClick={() => {
            dispatch({ type: "INP", payload: input });
            setInput(0);
          }}
        >
          ondemand
        </button>
        <button
          className="bg-black px-6 py-2 text-white"
          type="button"
          onClick={() => {
            dispatch({ type: "INC", payload: 0 });
          }}
        >
          increment
        </button>
        <button
          className="bg-black px-6 py-2 text-white"
          type="button"
          onClick={() => {
            dispatch({ type: "DEC", payload: 0 });
          }}
        >
          decrement
        </button>
        <button
          className="bg-black px-6 py-2 text-white"
          type="button"
          onClick={() => {
            dispatch({ type: "MUL" });
          }}
        >
          multiply
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
