import React from "react";
import getPokemon from "@/api/getPokemon";

const Beginner = () => {
  let min = 1 ;
  let max = 1000 ;
  const i: number = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  const data = new getPokemon(i);

console.log(data.getPokemonImage())
  return (
    <>
      <img src={data.getPokemonImage()} alt="" />
      <div>{ data.getPokemonName() }</div>
      
    </>
  )
};

export default Beginner;
