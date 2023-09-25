import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  console.log("comp");
  const increaseCount = () => {
    console.log("increament");
    setCount((prevState) => prevState + 1);
  };
  const expensiveCalcultation = (num) => {
    console.log("expensive calc");
    for (let i = 0; i < 1000000000; i++) {
        num+=1
    }
   return num
  };
  const memoisedValue = useMemo(() => {
    console.log("use memo");
    return expensiveCalcultation(count);
  }, [count]);
  console.log("memo-->>   ", memoisedValue);
  return (
    <>
      <div className="flex justify-center">
        <div>{count}</div>
        {console.log("jsx")}
        <button
          onClick={increaseCount}
          className="bg-red-900 text-white px-5 py-2 rounded-md"
        >
          Inc
        </button>
        <div>memoised value: {memoisedValue}</div>
      </div>
    </>
  );
};

export default UseMemo;
