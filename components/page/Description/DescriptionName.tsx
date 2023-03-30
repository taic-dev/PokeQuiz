import React, { useState } from "react";
import styles from "./Description.module.scss";
import DescriptionQuizRange from "./DescriptionQuizRange";
import Button from "@/components/ui/Button/Button";
import { Typography } from "@mui/material";

const DescriptionName = () => {
  const [range, setRange] = useState("");

  return (
    <>
      <Typography component="h1">▶︎ ポケモンなまえクイズ</Typography>
      <Typography component="h2">▶︎ ルール説明</Typography>
      <div className={styles.description__desc}>
        <div className={styles.description__text}>
          <p>
            全10問のポケモンの名前を解答しよう! <br />
            答え合わせは10問すべてを回答した後にできます。
          </p>
          <ul>
            <li>【回答方法】</li>
            <li>・「なまえ」のテキストフィールドに回答を入力する </li>
            <li>・「次へ」のボタンをクリックすると次の問題へ</li>
          </ul>
          <p>※ 回答の文字数は入力に制限があります。</p>
          <DescriptionQuizRange />
          <div className={styles.description__button}>
            <Button link={`/quiz-name`}>ゲームスタート</Button>
          </div>
        </div>
        <div className={styles.description__img}>
          <img src="/img/description.png" alt="説明画像" />
        </div>
      </div>
    </>
  );
};

export default DescriptionName;
