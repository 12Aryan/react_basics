import React, { useContext } from "react";
import { Data } from "../../App";

const UseContext = () => {
  const { toggle, setToggle } = useContext(Data);
  console.log(toggle);
  return (
    <div > Toggle:
     <span> {toggle?"true":"false "}</span>
      <h1>
        {" "}
        toggle variable contains a state which is global this state can be used
        in any of the component since it is created using contextAPI
      </h1>
      
      <button className="px-6 py-2 bg-black text-white" onClick={()=>{setToggle(!toggle)}}>setToggle</button>
    </div>
  );
};

export default UseContext;
