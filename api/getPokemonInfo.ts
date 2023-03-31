interface rangeType {
  generation: number;
  min: number;
  max: number;
  checked: boolean;
}

interface Answer {
  name: string | undefined
}

interface Desc {
  length: number | undefined;
  genera: string | undefined;
  flavor: string | undefined;
  img: string | undefined;
}

interface PokemonObj {
  desc?: Array<any> | undefined;
  answer?: Array<any> | undefined;
}

let array: Array<PokemonObj> = [
  { desc:[] },
  { answer: [] }
]

const getPokemonInfo = (rangeArray:rangeType) => {
  console.log(rangeArray);

  

}

export default getPokemonInfo
