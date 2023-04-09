import React from "react";
import { RangeType } from "@/types";
import {
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";

interface Props {
  range: RangeType[];
  setRange: React.Dispatch<React.SetStateAction<RangeType[]>>;
}

const DescriptionQuizRange: React.FC<Props> = ({ range, setRange }) => {
  const handleChnageQuizRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(
      range.map((obj) =>
        obj.generation === Number(e.target.value)
          ? {
              generation: obj.generation,
              min: obj.min,
              max: obj.max,
              checked: e.target.checked,
            }
          : obj
      )
    );
  };

  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        ▼ 問題の出題範囲
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup onChange={handleChnageQuizRange}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="カントー地方(第1世代)"
            value="1"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ジョウト地方(第2世代)"
            value="2"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ホウエン地方(第3世代)"
            value="3"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="シンオウ地方(第4世代)"
            value="4"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="イッシュ地方(第5世代)"
            value="5"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="カロス地方(第6世代)"
            value="6"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="アローラ地方(第7世代)"
            value="7"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ガラル地方(第8世代)"
            value="8"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="パルデア地方(第9世代)"
            value="9"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default DescriptionQuizRange;
