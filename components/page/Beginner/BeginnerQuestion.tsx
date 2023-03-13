import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import getPokemonBegginer from "@/api/getPokemonBegginer";
import styles from "./Beginner.module.scss";

interface BeginnerProps {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  answerArray: string[];
  setAnswerArray: React.Dispatch<React.SetStateAction<string[]>>;
}

const BeginnerQuestion = ({
  num,
  setNum,
  answer,
  setAnswer,
  answerArray,
  setAnswerArray,
}: BeginnerProps) => {
  const questionArray = getPokemonBegginer();

  const answerBoxChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAnswer(e.target.value);
  };

  const nextButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAnswerArray([answer, ...answerArray]);
    setNum(num + 1);
    setAnswer("");
  };

  console.log(answerArray);
  console.log(questionArray);

  return (
    <form
      action="#"
      onSubmit={(e) => nextButtonClick(e)}
      className={styles.beginner__wrapper}
    >
      <h1>▶︎ このポケモンのなまえは？</h1>
      <div className={styles.beginner__count}><span>{num}/10</span></div>
      <div className={styles.beginner__box}>
        <div className={styles.beginner__left}>
          <div className={styles.beginner__desc}>
            <TextField
              onChange={(e) => answerBoxChange(e)}
              value={answer}
              className={styles.beginner__name}
              label="なまえ"
              variant="standard"
            />
            <div className={styles.beginner__detail}>
              <h2>▶︎ ヒント</h2>
              <p className={styles.beginner__name}>
                答えは <span>{questionArray[0].desc[num].length}</span> 文字
              </p>
              <p>{questionArray[0].desc[num].genera}</p>
              <p>{questionArray[0].desc[num].flavor}</p>
            </div>
          </div>
        </div>
        <div className={styles.beginner__right}>
          <div className={styles.beginner__img}>
            <img src={questionArray[0].desc[num].img} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.beginner__button}>
        <Button type="submit" variant="contained">
          {num < 10 ? "つぎへ" : "答え合わせ"}
        </Button>
      </div>
    </form>
  );
};

export default BeginnerQuestion;
