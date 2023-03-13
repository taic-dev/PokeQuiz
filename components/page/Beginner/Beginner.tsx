import React, { useState } from "react";
import BeginnerQuestion from "./BeginnerQuestion";
import BeginnerAnswer from "./BeginnerAnswer";

const Beginner = () => {
  const [num, setNum] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [answerArray, setAnswerArray] = useState<string[]>([]);

  return (
    num <= 10 ? (
      <BeginnerQuestion 
        num={num}
        setNum={setNum}
        answer={answer}
        setAnswer={setAnswer}
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
       />
    ) : (
      <BeginnerAnswer />
    )
  );
};

export default Beginner;