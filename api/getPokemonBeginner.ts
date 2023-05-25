import useFetch from "@/hooks/useFetch";
import randomNum from "@/util/randomNum";
import { RangeType, PokemonObj, PokemonAnswerInfo } from "@/types";

const getPokemonBegginer = (rangeArray: RangeType[]) => {

  let array: PokemonObj[] = [
    { desc:[] },
    { answer: [] }
  ]

  if(!array[0].desc || !array[1].answer) return;

  for(let num=0; num<10; num++) {
    let randamNum = Math.floor(Math.random() * rangeArray.length)
    let i = randomNum(rangeArray[randamNum].min, rangeArray[randamNum].max);
    
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

export default getPokemonBegginer
