import randomNum from "@/util/randomNum";

const getPokemonRandom = (min: number, max: number, count: number): string[]  => {
  const pokemonArray: string[] = [];
  for(let i=0; i<=count; i++) {
    let num = randomNum(min, max);
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${num}.gif`;
    pokemonArray.push(url);
  }
  return pokemonArray;
}

export default getPokemonRandom
