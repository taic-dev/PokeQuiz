import React,{ useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import getPokemonBegginer from "@/api/getPokemonBegginer";
import styles from "./Beginner.module.scss";

const Beginner = () => {
  const array = getPokemonBegginer();
  const [num, setNum] = useState(0);
  
  const nextButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNum(num + 1);
  }

  console.log(array);

  if(!array) "Loading";

  return (
    <>
      <div className={styles.beginner__wrapper}>
        <h1>▶︎ このポケモンのなまえは？</h1>
        <div className={styles.beginner__box}>
          <div className={styles.beginner__left}>
            <div className={styles.beginner__desc}>
              <TextField className={styles.beginner__name} label="なまえ" variant="standard" />
              <div className={styles.beginner__detail}>
                <h2>▶︎ ヒント</h2>
                <p className={styles.beginner__name}>答えは <span>{array[0].desc[num].length}</span> 文字</p>
                <p>{array[0].desc[num].genera}</p>
                <p>{array[0].desc[num].flavor}</p>
              </div>
            </div>
          </div>
          <div className={styles.beginner__right}>
            <div className={styles.beginner__img}>
              <img src={array[0].desc[num].img} alt="" />
            </div>
          </div>
        </div>
        <form action="#" onSubmit={(e)=>nextButtonClick(e)} className={styles.beginner__form}>
          <input type="submit" value="つぎへ" />
        </form>
      </div>
    </>
  );
};

export default Beginner;
