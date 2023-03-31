const randomNum = (min: number, max: number): number => {
  const i: number = Math.floor(Math.random() * (max + 1 - min)) + min;
  return i;
}

export default randomNum
