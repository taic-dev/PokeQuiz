import useFetch from "@/hooks/useFetch";
import randomNum from "@/util/randomNum";
import { RangeType, PokemonObj, PokemonAnswerInfo } from "@/types";

const getPokemonNameQuestion = (rangeArray: RangeType[]) => {

  let array: PokemonObj[] = [
    { desc:[] },
    { answer: [] }
  ]
  if(!array[0].desc || !array[1].answer) return;
  
  let i: number;
  let checkRandomArray: number[] = [];

  for(let num=0; num<10; num++) {
    // 配列のkeyをランダムで出す
    let x = Math.floor(Math.random() * rangeArray.length)
    // 図鑑Noにかぶりがないか確認
    while(true) {
      // 配列のkeyを元に図鑑Noの最小値と最大値を取得
      i = randomNum(rangeArray[x].min, rangeArray[x].max);
      if(!checkRandomArray.includes(i)){
        checkRandomArray.push(i);
        break;
      }
    }

    let url: string = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let response = useFetch(url, {});
    const image = response?.data.sprites.front_default;
    
    url = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    response = useFetch(url, {});

    const names = response?.data.names.find(
      (v: { language: { name: string } }) => v.language.name == "ja"
    );

    const genera = response?.data.genera.find(
      (v: { language: { name: string } }) => v.language.name == "ja"
    );
      
    const flavor = response?.data.flavor_text_entries.find(
      (v: { language: { name: string } }) => v.language.name == "ja"
    );

    const pokemonDesc: PokemonAnswerInfo = {
      length: names && names.name.length,
      genera: genera && genera.genus,
      flavor: flavor && flavor.flavor_text.replace(/\s+/g, ""),
      img: image && image
    }

    const pokemonAnswer: { name: string | undefined } = {
      name: names && names.name,
    }

    array[0].desc.push(pokemonDesc);
    array[1].answer.push(pokemonAnswer);
  }

  return array;
}

export default getPokemonNameQuestion
