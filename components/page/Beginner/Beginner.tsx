import React, { useState } from "react";
import BeginnerQuestion from "./BeginnerQuestion";
import BeginnerAnswer from "./BeginnerAnswer";
import getPokemonBeginner from "@/api/getPokemonBeginner";

const Beginner = () => {
  const [num, setNum] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [answerArray, setAnswerArray] = useState<string[]>([]);
  const questionArray: [] | undefined = getPokemonBeginner();

  return num < 10 ? (
    <BeginnerQuestion
      num={num}
      setNum={setNum}
      answer={answer}
      setAnswer={setAnswer}
      answerArray={answerArray}
      setAnswerArray={setAnswerArray}
      questionArray={questionArray}
    />
  ) : (
    <BeginnerAnswer 
      answerArray={answerArray}
      questionArray={questionArray} 
    />
  );
};

export default Beginner;
