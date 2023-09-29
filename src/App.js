import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouting from "./Components/Routing/AppRouting";
const Data = createContext(); //example of context API

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Data.Provider value={{ toggle, setToggle }}>
          <AppRouting />
        </Data.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
export { Data };
