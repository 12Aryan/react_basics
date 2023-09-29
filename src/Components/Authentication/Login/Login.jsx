import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const initialValues={

}

const Login = () => {
  const navigate = useNavigate();
  useFormik({
    initialValues: initialValues,
    onSubmit: (values)=>{
        console.log('-->>', values)
    }
  })
  const handleLogin = () => {
    navigate("/usestate");
  };
  return (
    <>

    
      <button className="bg-pink-800 text-white" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
