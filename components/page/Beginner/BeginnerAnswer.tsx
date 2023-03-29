import React from 'react'
import Button from "@/components/ui/Button/Button";
import styles from "./Beginner.module.scss";

interface PokemonObj {
  desc?: [] | undefined;
  answer?: [] | undefined;
}

interface BeginnerProps {
  answerArray: string[];
  questionArray?: Array<PokemonObj> | undefined;
}

interface Desc {
  length: number | undefined;
  genera: string | undefined;
  flavor: string | undefined;
  img: string | undefined;
}

const BeginnerAnswer = ({ answerArray, questionArray }: BeginnerProps) => {

  return (
    <div className={styles.beginner__wrapper}>
      <h1>▶︎ けっかはっぴょう</h1>
      <ul className={styles.beginner__list}>
        {questionArray[0].desc.map((v: Desc,i: React.Key | number)=>(
          <li className={styles.beginner__item} key={i}>
            <div className={styles.beginner__desc}>
              <span>{answerArray[i as keyof typeof i] === questionArray[1].answer[i].name ? "○" : "×"}</span>
              <img src={v.img} alt="回答画像" />            
            </div>
            <div className={styles.beginner__diff}>
              <p>▶︎{answerArray[i as keyof typeof i]}</p>
              <p>答え：{questionArray[1].answer[i].name}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.beginner__button}>
        <Button link='/'>
          TOPへ
        </Button>
      </div>
    </div>
  )
}

export default BeginnerAnswer
