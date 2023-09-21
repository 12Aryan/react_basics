import React, { useEffect, useState } from "react";

const CustomHook = (url) => {
  console.log('url', url);
  const [dataList, setDataList] = useState([]);
  console.log("component"); 
  const getData = async () => {
    console.log("function called");
    let response = await fetch(url);
    response = await response.json();
    console.log("response", response);
    setDataList(response);
  };
  console.log("data", dataList);
  useEffect(() => {
    getData();
    console.log("useEffecct");
  }, [url]);
  return[dataList]
};

export default CustomHook;
