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
import UseParams from "../Hooks/UseParams/UseParams";
import UseParamsDetails from "../Hooks/UseParams/UseParamsDetails/UseParamsDetails";
import UseSearchParams from "../Hooks/UseSearchParams/UseSearchParams";

const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Header />}>
          <Route path="/usestate" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseContext" element={<UseContext />} />
          <Route path="/UseRef" element={<UseRef />} />
          <Route path="/UseReducer" element={<UseReducer />} />
          {/* <Route path="/CustomHook" element={<CustomHook />}/Route> */}
          <Route path="/Record" element={<Record />} />
          <Route path="/movie-app" element={<Movie />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usenavigate" element={<UseNavigate />} />
          <Route path="/useparams" element={<UseParams />} />
          <Route
            path="/useparams/useparamsdetails/:userId"
            element={<UseParamsDetails />}
          />
           <Route
            path="/usesearchparams"
            element={<UseSearchParams/>}
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouting;
