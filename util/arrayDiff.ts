function arrayDiff(array1: string[], array2: { name: string }[]) {
  let count = 0;
  for(let i=0; i < array2?.length; i++ ) {
    array1[i] === array2?.[i].name && count++
  }
  return count;
}

export default arrayDiff;
