import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Links } from "./Links";

const Header = () => {
  const location = useLocation();
  console.log("-->>", location.pathname.split("/"));
  const pathData = location.pathname.split("/");
  const currentPath = `/${pathData[1]}`;

  return (
    <>
      <div className=" text-white flex justify-between px-10 py-5 flex-wrap gap-3">
        {Links.map((e, i) => {
          return (
            <div key={i}>
              <Link to={e.route}>
                {" "}
                <button
                  className={`${
                    currentPath === e.route ? "bg-pink-800" : "bg-black"
                  } text-white px-6 py-2 `}
                >
                  {e.ButtonName}{" "}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
