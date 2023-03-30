import React from 'react'
import Button from "@/components/ui/Button/Button";
import styles from "./QuizName.module.scss";

interface PokemonObj {
  desc?: Array<any> | undefined;
  answer?: Array<any> | undefined;
}

interface QuizNameProps {
  answerArray: string[];
  questionArray?: Array<PokemonObj> | undefined;
}

interface Desc {
  length: number | undefined;
  genera: string | undefined;
  flavor: string | undefined;
  img: string | undefined;
}

const QuizNameAnswer = ({ answerArray, questionArray }: QuizNameProps) => {

  return (
    <div className={styles["quiz-name__wrapper"]}>
      <h1>▶︎ けっかはっぴょう</h1>
      <ul className={styles["quiz-name__list"]}>
        {questionArray[0].desc?.map((v: Desc,i: React.Key | number)=>(
          <li className={styles["quiz-name__item"]} key={i}>
            <div className={styles["quiz-name__desc"]}>
              <span>{answerArray[i as keyof typeof i] === questionArray[1]?.answer[i]?.name ? "○" : "×"}</span>
              <img src={v.img} alt="回答画像" />            
            </div>
            <div className={styles["quiz-name__diff"]}>
              <p>▶︎{answerArray[i as keyof typeof i]}</p>
              <p>答え：{questionArray[1]?.answer[i]?.name}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles["quiz-name__button"]}>
        <Button link='/'>
          TOPへ
        </Button>
      </div>
    </div>
  )
}

export default QuizNameAnswer