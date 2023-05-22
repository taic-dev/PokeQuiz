import React from 'react'
import styles from "./CommingSoon.module.scss"
import Button from "@/components/ui/Button/Button";

const CommingSoon = () => {
  return (
    <div className={styles["comming-soon"]}>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/201.gif" alt="アンノーン" />
      <div className={styles["comming-soon__content"]}>
        <h1>Comming Soon</h1>
        <Button link="/">トップページに戻る</Button>
      </div>
    </div>
  )
}

export default CommingSoon
