import React from 'react'

interface BeginnerProps {
  answerArray: string[];
  questionArray: [];
}

const BeginnerAnswer = ({ answerArray, questionArray }: BeginnerProps) => {
  console.log(questionArray);
  console.log(answerArray);

  return (
    <div>
      Ansewrページ

    </div>
  )
}

export default BeginnerAnswer
