import randomNum from "@/util/randomNum";

const getPokemonRandom = (min: number, max: number, count: number): string[]  => {
  const pokemonArray: string[] = [];
  let num: number;
  let checkRandomArray: number[] = [];

  for(let i=0; i<=count; i++) {
    // 図鑑Noにかぶりがないか確認
    while(true) {
      num = randomNum(min, max);
      if(!checkRandomArray.includes(num)){
        checkRandomArray.push(num);
        break;
      }
    }
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${num}.gif`;
    pokemonArray.push(url);
  }
  return pokemonArray;
}

export default getPokemonRandom
