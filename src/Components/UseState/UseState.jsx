import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>

      <button
        className="bg-black text-white px-6 py-2 m-2"
        onClick={() => {
          setTimeout(() => {
            return setCount(count + 1);
          }, 2000);
          console.log("-->>", count);
          
        }}
      >
        Delayed Counter (basic)
      </button>
      <button
        disabled={count === 0}
        className="bg-gray-500 text-white px-6 py-2 "
        onClick={() =>{
          setTimeout(
            () =>
              setCount((x) => {
              
                return x + 1;
              }),
            2000
          )
          console.log("-->>", count);
        }
        }
      >
        Delayed Counter (functional)
      </button>
      <button
        className="bg-black text-white px-6 py-2 m-2"
        onClick={() => setCount(count + 1)}
      >
        Immediate Counter
      </button>
    </>
  );
};

export default UseState;
