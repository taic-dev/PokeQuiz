import React from 'react'
import { RangeType } from "@/types";
import arrayChecked from "@/util/arrayChecked";

interface Props {
  range: RangeType[];
}

const DescriptionValidation: React.FC<Props> = ({ range }) => {
  const isArrayChecked = arrayChecked(range);
  return <>{ !isArrayChecked && <p style={{ color: "red" }}>出題範囲を選択してください。</p> }</>
}

export default DescriptionValidation