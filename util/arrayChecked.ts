import { RangeType } from "@/types";
type Argument = RangeType[];

const arrayChecked = (range: Argument) => {
  for(let i = 0; i<range.length; i++ ){
    if(range[i].checked) return true;
  }
  return false;
}

export default arrayChecked;