import React, { useState, useEffect } from "react";
import QuizNameQuestion from "./QuizNameQuestion";
import QuizNameAnswer from "./QuizNameAnswer";
import getPokemonBeginner from "@/api/getPokemonBeginner";

interface PokemonObj {
  desc?: Array<any> | undefined;
  answer?: Array<any> | undefined;
}

const QuizName = () => {
  const [num, setNum] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [answerArray, setAnswerArray] = useState<string[]>([]);
  const questionArray: Array<PokemonObj> | undefined = getPokemonBeginner();
  
  useEffect(() => {
    const rangeArraay = JSON.parse(localStorage.getItem('rangeObj') || '{}');
    console.log(rangeArraay)
  },[]);

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
    <QuizNameAnswer 
      answerArray={answerArray}
      questionArray={questionArray} 
    />
  );
};

export default QuizName;
