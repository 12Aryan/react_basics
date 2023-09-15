import React from "react";
import { Link } from "react-router-dom";
import UseState from "../UseState/UseState";
import { Links } from "./Links";

const Wrapper = () => {
  return (
    <div className=" text-white flex justify-between px-10 py-5">
      {Links.map((e, i) => {
        return (
          <Link to={e.route}>
            {" "}
            <button key={i} className="bg-black text-white px-6 py-2">
              {e.routeName}{" "}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Wrapper;
