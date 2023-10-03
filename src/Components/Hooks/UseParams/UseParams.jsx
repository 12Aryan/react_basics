import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UseParams = () => {
  const navigate = useNavigate();
  const userId = crypto.randomUUID();
  const clickForDetails = () => {
    navigate(`useparamsdetails/${userId}`);
  };
  return (
    <>
      <div>UseParams</div>
      <button
        className="bg-red-700 text-white px-6 py-2"
        onClick={clickForDetails}
      >
        Click for UserDetails
      </button>
      <Outlet />
    </>
  );
};

export default UseParams;
