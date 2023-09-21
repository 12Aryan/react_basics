import React from "react";
import { Link } from "react-router-dom";
import { Links } from "./Links";

const Header = () => {
  return (
    <div className=" text-white flex justify-between px-10 py-5 flex-wrap">
      {Links.map((e, i) => {
        return (
          <Link key={i} to={e.route}>
            {" "}
            <button key={i} className="bg-black text-white px-6 py-2">
              {e.ButtonName}{" "}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
