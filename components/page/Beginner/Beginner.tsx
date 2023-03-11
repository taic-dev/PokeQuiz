import React from "react";
import getPokemonName from "@/api/getPokemonName";

const Beginner = () => {

  const data = getPokemonName();

  return <div>{ data }</div>;
};

export default Beginner;
