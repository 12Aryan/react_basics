import React from "react";
import { useSearchParams } from "react-router-dom";

const UseSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("-->searchParams", searchParams);
  console.log("-->searchParams", searchParams.get("name"));
  const setParameters = () => {
    setSearchParams({name: 'aryan', age: 31});
  };

  return (
    <>
      <div>UseSearchParams</div>
     <div>{searchParams.get("name")}</div>
      <button onClick={setParameters}>click</button>
    </>
  );
};

export default UseSearchParams;
