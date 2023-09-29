import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/usestate");
  };
  return (
    <>
  

  

      <button className="bg-pink-800" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
