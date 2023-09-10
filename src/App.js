import React from "react";
import Card from "./Components/Movies/Card";
import movieData from "./Components/Movies/MovieData.json";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="parent bg-black text-white">
      <Header/>
      <div className="card flex flex-wrap  gap-5">
      {movieData.map((movie, id) => {
        return (
          <>
            <Card image={movie.Poster} title={movie.Title} year={movie.Year} />
          </>
        );
      })}
      </div>
    </div>
  );
};

export default App;
