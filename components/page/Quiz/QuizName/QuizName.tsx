import React, { useState, useEffect } from "react";
import QuizNameQuestion from "./QuizNameQuestion";
import QuizNameAnswer from "./QuizNameAnswer";
import getPokemonBeginner from "@/api/getPokemonBeginner";
import { RangeType, PokemonObj } from "@/types";

const QuizName = () => {
  const [num, setNum] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [answerArray, setAnswerArray] = useState<string[]>([]);
  
  let rangeArray = JSON.parse(typeof window !== 'undefined' && localStorage.getItem("rangeObj") || "{}")
  rangeArray = rangeArray?.filter((v:RangeType)=> v.checked && v);
  const questionArray: Array<PokemonObj> | undefined = getPokemonBeginner(rangeArray);

  return num < 10 ? (
    <QuizNameQuestion
      num={num}
      setNum={setNum}
      answer={answer}
      setAnswer={setAnswer}
      answerArray={answerArray}
      setAnswerArray={setAnswerArray}
      questionArray={questionArray || undefined}
    />
  ) : (
    <QuizNameAnswer answerArray={answerArray} questionArray={questionArray} />
  );
};

export default QuizName;
