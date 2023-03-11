import React from "react";
import Button from "../../ui/Button/Button";
import getPokemon from "@/api/getPokemon";
import styles from "./Beginner.module.scss";

const Beginner = () => {

  const data = new getPokemon();

  

  if (!data) return "Loading";

  return (
    <>
      <div className={styles.beginner__wrapper}>
        <h1>▶︎ このポケモンのなまえは？</h1>
        <div className={styles.beginner__box}>
          <div className={styles.beginner__left}>
            <div className={styles.beginner__desc}>
              <h2 className={styles.beginner__name}>{data.getPokemonName()}</h2>
              <div className={styles.beginner__detail}>
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
        <div className={styles.beginner__button}>
          <Button link="beginner">次へ</Button>
        </div>
      </div>
    </>
  );
};

export default Beginner;
