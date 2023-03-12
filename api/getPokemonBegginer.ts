import useFetch from "@/hooks/useFetch";
import randomNum from "@/util/randomNum";

const getPokemonBegginer = () => {
  interface Desc {
    name: string | undefined;
    genera: string | undefined;
    flavor: string | undefined;
    img: string | undefined;
  }

  let array: any = [
    { desc:[] }
  ]

  for(let num=0; num<10; num++) {
    let i = randomNum();
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

    const pokemonDesc: Desc = {
      name: names && names.name,
      genera: genera && genera.genus,
      flavor: flavor && flavor.flavor_text.replace(/\s+/g, ""),
      img: image && image
    }

    array[0].desc.push(pokemonDesc);
  }

  return array;
}

export default getPokemonBegginer
