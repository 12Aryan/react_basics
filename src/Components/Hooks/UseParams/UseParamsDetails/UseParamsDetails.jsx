import React from "react";
import { useParams } from "react-router-dom";

const UseParamsDetails = () => {
  const { userId } = useParams();
  const data = useParams()
  console.log('data--<<0', data)

  return (
    <>
      <h1>{userId}</h1>
      <div>UseParamsDetails</div>
    </>
  );
};

export default UseParamsDetails;
