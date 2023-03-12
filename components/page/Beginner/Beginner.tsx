import React,{ useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import getPokemon from "@/api/getPokemon";
import styles from "./Beginner.module.scss";

const Beginner = () => {
  const [data, setData] = useState(new getPokemon())
  const [next, setNext] = useState("");
  const [test, setTest] = useState(data.getPokemonName());

  useEffect(() => {
    setData(new getPokemon());
    console.log(test);
  },[])

  if (!data) return "Loading";

  const nextButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

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
                <p className={styles.beginner__name}>答えは <span>{data.getPokemonName().length}</span> 文字</p>
                <p>{data.getPokemonDesc().genera}</p>
                <p>{data.getPokemonDesc().flavor}</p>
              </div>
            </div>
          </div>
          <div className={styles.beginner__right}>
            <div className={styles.beginner__img}>
              <img src={data.getPokemonImage()} alt="" />
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
