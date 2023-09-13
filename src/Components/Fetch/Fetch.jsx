import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import { Data } from "../../App";

const Fetch = () => {
  const {toggle, setToggle} = useContext(Data)
  console.log("toggleData", toggle);
  //   const [state, setState] = useState([]);
  //   console.log("-->", state);
  const [count, setCount] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`
      );
      console.log("response", response);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("component render", data);
  useEffect(() => {
    console.log("useEffect");
    getData();
  }, [count]);
  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3">
          <div>
            <button
              className="bg-black text-white py-4 px-3 rounded-lg"
              onClick={() => {
                setCount(count + 5)
                setToggle(!toggle)
                }}
            >
              Fetch Data
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img src={ele.imageUrl} alt="employee-img" />
                  <h1>{ele.firstName}</h1>
                  <h1>{ele.lastName}</h1>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Fetch;
