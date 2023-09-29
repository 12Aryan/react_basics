import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Authentication/Login/Login";
import Header from "../Header/Header";
import UseState from "../Hooks/UseState/UseState";
import UseEffect from "../Hooks/UseEffect/UseEffect";
import UseContext from "../Hooks/UseContext/UseContext";
import UseRef from "../Hooks/UseRef/UseRef";
import UseReducer from "../Hooks/UseReducer/UseReducer";
import UseMemo from "../Hooks/UseMemo/UseMemo";
import UseCallback from "../Hooks/UseCallback/UseCallback";
import UseNavigate from "../Hooks/UseNavigate/UseNavigate";
import Record from "../Applications/Record keeper/Record";
import Movie from "../Applications/Movies/Component/Movie";

const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route element={<Header />}>
          <Route path="/usestate" element={<UseState />}></Route>
          <Route path="/UseEffect" element={<UseEffect />}></Route>
          <Route path="/UseContext" element={<UseContext />}></Route>
          <Route path="/UseRef" element={<UseRef />}></Route>
          <Route path="/UseReducer" element={<UseReducer />}></Route>
          {/* <Route path="/CustomHook" element={<CustomHook />}></Route> */}
          <Route path="/Record" element={<Record />}></Route>
          <Route path="/movie-app" element={<Movie />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usenavigate" element={<UseNavigate />} />
          <Route path=""></Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouting;
