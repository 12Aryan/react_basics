import React from "react";
import Card from "./Components/Movies/Card";
import movieData from "./Components/Movies/MovieData.json";
import Header from "./Components/Header/Header";
import Counter from "./Components/Counter/Counter";
import Record from "./Components/Record keeper/Record";
import Fetch from "./Components/Fetch/Fetch";

const App = () => {
  return (
    // <div className="parent bg-black text-white">
    //   <Header />
    //   <div className="card flex flex-wrap justify-between gap-5">
    //     {movieData.map((movie, id) => {
    //       return (
    //         <Card
    //           key={id}
    //           image={movie.Poster}
    //           title={movie.Title}
    //           year={movie.Year}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
    // <Record/>
    // <Counter/>
    <Fetch/>
  
  );
};

export default App;
