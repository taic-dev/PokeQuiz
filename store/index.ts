import { createStore } from "redux";
import { RangeType } from "@/types";

const range: RangeType[] = [
  { generation: 1, min: 1, max: 151, checked: true },
  { generation: 2, min: 152, max: 251, checked: true },
  { generation: 3, min: 252, max: 386, checked: true },
  { generation: 4, min: 387, max: 493, checked: true },
  { generation: 5, min: 494, max: 649, checked: true },
  { generation: 6, min: 650, max: 721, checked: true },
  { generation: 7, min: 722, max: 809, checked: true },
  { generation: 8, min: 810, max: 905, checked: true },
  { generation: 9, min: 906, max: 1008, checked: true },
]

const reducer = (state = range, action: any) => {
  switch(action.type) {
    case "GET_RANGE":
     return action.range;
    case "CLEAR_STATE":
      return range;
    default:
      return state;
  }
}

export const store = createStore(reducer);