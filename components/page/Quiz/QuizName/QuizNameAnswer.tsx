import React, { useState } from "react";
import { Button } from "@mui/material";
import { QuizNameProps, PokemonAnswerInfo } from "@/types";
import { TweetArea } from "@/features/TweetArea/TweetArea";
import styles from "./QuizName.module.scss";

const QuizNameAnswer = ({ answerArray, questionArray }: QuizNameProps) => {
  const [show, setShow] = useState(false);

  const handleClickShow = () => setShow(true);

  return (
    <div className={styles["quiz-name__wrapper"]}>
      <h1>▶︎ けっかはっぴょう</h1>
      <ul className={styles["quiz-name__list"]}>
        {questionArray?.[0]?.desc?.map(
          (v: PokemonAnswerInfo, i: React.Key | number | any) => (
            <li className={styles["quiz-name__item"]} key={i}>
              <div className={styles["quiz-name__desc"]}>
                <span>
                  {answerArray[i] === questionArray?.[1]?.answer?.[i]?.name ? "○" : "×"}
                </span>
                <img src={v.img} alt="回答画像" />
              </div>
              <div className={styles["quiz-name__diff"]}>
                <p>▶︎{answerArray[i]}</p>
                <p>答え：{questionArray?.[1]?.answer?.[i]?.name}</p>
              </div>
            </li>
          )
        )}
      </ul>
      <TweetArea answerArray={answerArray} questionArray={questionArray} show={show} setShow={setShow} />
      <div className={styles["quiz-name__button"]}>
        <Button variant="contained" onClick={()=>handleClickShow()}>次へ</Button>
      </div>
    </div>
  );
};

export default QuizNameAnswer;
