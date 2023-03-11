import React from 'react'
import useFetch from '@/hooks/useFetch';

const getPokemonName = () => {
  let min = 1 ;
  let max = 1000 ;
  const i: number = Math.floor( Math.random() * (max + 1 - min) ) + min ;
  const url: string = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
  const { data } = useFetch(url, {});

  const jaData = data?.data.names.find(
    (v: { language: { name: string } }) => v.language.name == "ja"
  );

  if(!jaData) return "Loading";

  return jaData.name;
}

export default getPokemonName
