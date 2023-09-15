import React, { createContext, useState } from "react";
import Card from "./Components/Movies/Card";
import movieData from "./Components/Movies/MovieData.json";
import Header from "./Components/Header/Header";
import UseState from "./Components/UseState/UseState";
import Record from "./Components/Record keeper/Record";
import UseEffect from "./Components/UseEffect/UseEffect";
import UseRef from "./Components/UseRef/UseRef";
import UseReducer from "./Components/UseReducer/UseReducer";
import CustomHook from "./Components/Custom Hook/CustomHook";
import UseContext from "./Components/UseContext/UseContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./Components/wrapper/Wrapper";
const Data = createContext(); //example of context API

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Wrapper />
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
          </Routes>
        </Data.Provider>
      </BrowserRouter>

      {/* <Data.Provider value={{ toggle, setToggle }}> */}
      {/* <div className="parent bg-black text-white">
       <Header />
       <div className="card flex flex-wrap justify-between gap-5">
         {movieData.map((movie, id) => {
           return (
             <Card
               key={id}
               image={movie.Poster}
               title={movie.Title}
               year={movie.Year}
             />
           );
         })}
       </div>
     </div>
     <Record/>
     <UseState/>
     <UseEffect/>
    
     <div className="div">
       <UseRef/>
     </div>
     <UseReducer/>
    <CustomHook/> */}
      {/* <UseContext />
      </Data.Provider> */}
    </>
  );
};

export default App;
export { Data };
