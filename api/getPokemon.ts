import useFetch from "@/hooks/useFetch";

export default class getPokemon {
  i: number | null;

  constructor(i: number | null) {
    this.i = i;
  }
  
  getPokemonName() {
    const url: string = `https://pokeapi.co/api/v2/pokemon-species/${this.i}/`;
    const { data } = useFetch(url, {});
  
    const jaData = data?.data.names.find(
      (v: { language: { name: string } }) => v.language.name == "ja"
    );
  
    if(!jaData) return "Loading";
  
    return jaData.name;
  }

  getPokemonDesc() {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${this.i}/`;
    const { data } = useFetch(url, {});
    return  data?.data.sprites.front_default
  }

  getPokemonImage() {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${this.i}/`;
    const { data } = useFetch(url, {});
    return  data?.data.sprites.front_default
  }



}