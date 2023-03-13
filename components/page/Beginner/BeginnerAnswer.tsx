import React from 'react'
import styles from "./Beginner.module.scss";

interface BeginnerProps {
  answerArray: string[];
  questionArray: [];
}

interface Desc {
  length: number | undefined;
  genera: string | undefined;
  flavor: string | undefined;
  img: string | undefined;
}

const BeginnerAnswer = ({ answerArray, questionArray }: BeginnerProps) => {
  console.log(questionArray);
  console.log(answerArray);

  return (
    <div className={styles.beginner__wrapper}>
      <h1>▶︎ けっかはっぴょう</h1>
      <ul className={styles.beginner__list}>
        {questionArray[0].desc.map((v: Desc,i: React.Key | number)=>(
          <li className={styles.beginner__item} key={i}>
            {/* {console.log(v.img)} */}
            <img src={v.img} alt="回答画像" />
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BeginnerAnswer
