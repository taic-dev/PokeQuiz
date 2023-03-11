import useFetch from "@/hooks/useFetch";

export default class getPokemon {
  i: number | null;

  constructor(i: number | null) {
    this.i = i;
  }
  
  getPokemonName() {
    const url: string = `https://pokeapi.co/api/v2/pokemon-species/${this.i}/`;
    const { data } = useFetch(url, {});
    
    if(!data) return "Loading";
  
    const jaData = data?.data.names.find(
      (v: { language: { name: string } }) => v.language.name == "ja"
    );
  
    return jaData.name;
  }

  getPokemonDesc() {
    interface Desc {
      genera: string | undefined;
      flavor: string | undefined;
    }

    const url: string = `https://pokeapi.co/api/v2/pokemon-species/${this.i}/`;
    const { data } = useFetch(url, {});

    const genera = data?.data.genera.find(
      (v: { language: { name: string } }) => v.language.name == "ja"
    );

    const flavor = data?.data.flavor_text_entries.find(
      (v: { language: { name: string } }) => v.language.name == "ja"
    );

    const pokemonDesc: Desc = {
      genera: genera && genera.genus,
      flavor: flavor && flavor.flavor_text
    }

    return pokemonDesc;
  }

  getPokemonImage() {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${this.i}/`;
    const { data } = useFetch(url, {});

    return  data?.data.sprites.front_default
  }
}