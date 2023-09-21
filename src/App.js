import React, { createContext, useState } from "react";
import UseState from "./Components/Hooks/UseState/UseState";
import Record from "./Components/Applications/Record keeper/Record";
import UseRef from "./Components/Hooks/UseRef/UseRef";
import UseReducer from "./Components/Hooks/UseReducer/UseReducer";
import CustomHook from "./Components/Hooks/Custom Hook/CustomHook";
import UseContext from "./Components/Hooks/UseContext/UseContext";
import UseEffect from "./Components/Hooks/UseEffect/UseEffect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./Components/Applications/Movies/Component/Movie";
import Header from "./Components/Header/Header";
const Data = createContext(); //example of context API

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Data.Provider value={{ toggle, setToggle }}>
          <Routes>
            <Route path="/" element={<UseState />}></Route>
            <Route path="/usestate" element={<UseState />}></Route>
            <Route path="/UseEffect" element={<UseEffect />}></Route>
            <Route path="/UseContext" element={<UseContext />}></Route>
            <Route path="/UseRef" element={<UseRef />}></Route>
            <Route path="/UseReducer" element={<UseReducer />}></Route>
            <Route path="/CustomHook" element={<CustomHook />}></Route>
            <Route path="/Record" element={<Record />}></Route>
            <Route path="/movie-app" element={<Movie />} />
          </Routes>
        </Data.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
export { Data };
