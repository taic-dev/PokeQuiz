const randomNum = (): number => {
  let min = 1;
  let max = 1008;
  const i: number = Math.floor(Math.random() * (max + 1 - min)) + min;
  return i;
}

export default randomNum
