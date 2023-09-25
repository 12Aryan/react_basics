import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Shared/loader/Loader";
import CustomHook from "../Custom Hook/CustomHook";

const UseEffect = () => {
  //   const [state, setState] = useState([]);
  //   console.log("-->", state);
  const [count, setCount] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(1);
  //custom Hook 
  const [dataList] = CustomHook("https://dummyjson.com/products");
  console.log("datalissssst", dataList);

  const getData = async () => {
    setLoading(true);
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
  const fetchDataUseEffect = (e) => {
    console.log(typeof e.target.id);

    setTab(Number(e.target.id));
    setCount(count + 5);
  };
  const fetchDataCustomHook = (e) => {
    console.log(typeof(e.target.id));
    // console.log('iiiii', i);

    setTab(Number(e.target.id));
  };

  useEffect(() => {
    console.log("useEffect");
    getData();
  }, [count]);
  return (
    <>
      <div className="wrapper">
        <div className="useEffect-wrapper">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex justify-center items-center gap-3">
                <button
                  id={1}
                  className="bg-black text-white py-4 px-3 rounded-lg"
                  onClick={(e) => {
                    fetchDataUseEffect(e);
                  }}
                >
                  Fetch Data using UseEffect
                </button>
                <button
                  id={2}
                  className="bg-black text-white py-4 px-3 rounded-lg"
                  onClick={(e) => {
                    fetchDataCustomHook(e);
                  }}
                >
                  Fetch data using Custom Hook
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tab === 1 &&
                  data.map((ele, index) => {
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
                <div className="flex flex-wrap ">
                  {tab === 2 &&
                    dataList.products.map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center justify-center max-w-1/5"
                        >
                          <img src={e.thumbnail} className='h-24 w-24' alt="employee-img" />
                          <div className="div">
                          <h1>{e.brand}</h1>
                          </div>
                          {/* <h1>{e.description}</h1> */}
                        </div>
                      );
                    })}
                </div>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UseEffect;
