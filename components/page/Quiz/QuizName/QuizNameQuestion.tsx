import React from "react";
import { Button, TextField } from "@mui/material";
import { PokemonObj } from '@/types';
import styles from "./QuizName.module.scss";

interface QuizNameProps {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  answerArray: string[];
  setAnswerArray: React.Dispatch<React.SetStateAction<string[]>>;
  questionArray: Array<PokemonObj> | undefined;
}

const QuizNameQuestion = ({
  num,
  setNum,
  answer,
  setAnswer,
  answerArray,
  setAnswerArray,
  questionArray,
}: QuizNameProps) => {

  const answerBoxChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAnswer(e.target.value);
  };

  const nextButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAnswerArray([...answerArray, answer]);
    setNum(num + 1);
    setAnswer("");
  };

  return (
    <form
      action="#"
      onSubmit={(e) => nextButtonClick(e)}
      className={styles["quiz-name__wrapper"]}
    >
      <h1>▶︎ このポケモンのなまえは？</h1>
      <div className={styles["quiz-name__count"]}><span>{num + 1}/10</span></div>
      <div className={styles["quiz-name__box"]}>
        <div className={styles["quiz-name__left}"]}>
          <TextField
            onChange={(e) => answerBoxChange(e)}
            value={answer}
            className={styles["quiz-name__name"]}
            label="なまえ"
            variant="standard"
            inputProps={{ maxLength: questionArray[0]?.desc[num]?.length }}
          />
          <div className={styles["quiz-name__detail"]}>
            <h2>▶︎ ヒント</h2>
            <p className={styles["quiz-name__name"]}>
              答えは <span>{questionArray[0]?.desc[num]?.length}</span> 文字
            </p>
            <p>{questionArray[0]?.desc[num]?.genera}</p>
            <p>{questionArray[0]?.desc[num]?.flavor}</p>
          </div>
        </div>
        <div className={styles["quiz-name__right"]}>
          <div className={styles["quiz-name__img"]}>
            <img src={questionArray[0]?.desc[num]?.img} alt="" />
          </div>
        </div>
      </div>
      <div className={styles["quiz-name__button"]}>
        <Button type="submit" variant="contained">
          {num < 9 ? "つぎへ" : "答え合わせ"}
        </Button>
      </div>
    </form>
  );
};

export default QuizNameQuestion;
