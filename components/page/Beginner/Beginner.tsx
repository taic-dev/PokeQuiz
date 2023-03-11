import React from "react";
import getPokemon from "@/api/getPokemon";

const Beginner = () => {
  let min = 1 ;
  let max = 1000 ;
  const i: number = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  const data = new getPokemon(i);

  if(!data) return "Loading";

  console.log(data.getPokemonDesc())
  return (
    <>
      <img src={data.getPokemonImage()} alt="" />
      <div>{ data.getPokemonName() }</div>
      <p>{data.getPokemonDesc().genera}</p>
      <p>{data.getPokemonDesc().flavor}</p>

    </>
  )
};

export default Beginner;
