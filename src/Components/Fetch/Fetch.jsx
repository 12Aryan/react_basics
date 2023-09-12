import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  //   const [state, setState] = useState([]);
  //   console.log("-->", state);
  const [count, setCount] = useState(10)
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`
    );
    console.log("response", response);
    setData(response.data);
  };

  console.log("component render", data);
  useEffect(() => {
    console.log("useEffect");
    getData();
  }, [count]);
  return (
    <div className="flex flex-col justify-center items-center gap-3">
     <div>
     <button className="bg-black text-white py-4 px-3 rounded-lg" onClick={()=>setCount(count+5)}>Fetch Data</button>
     </div>
      <div className="flex flex-wrap gap-2">
        {data.map((ele, index) => {
          return (
           
              <div key={index} className="flex flex-col items-center justify-center" >
                <img src={ele.imageUrl} alt="employee-img" />
                <h1>{ele.firstName}</h1>
                <h1>{ele.lastName}</h1>
              </div>
           
          );
        })}
      </div>
    </div>
  );
};

export default Fetch;
