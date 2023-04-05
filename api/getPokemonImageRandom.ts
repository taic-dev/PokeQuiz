const getPokemonRandom = (min: number, max: number, count: number): Array<string>  => {
  const pokemonArray: Array<string> = [];
  for(let i=0; i<=count; i++) {
    let num = Math.floor(Math.random()*(max+1-min))+min;
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${num}.gif`;
    pokemonArray.push(url);
  }
  return pokemonArray;
}

export default getPokemonRandom
