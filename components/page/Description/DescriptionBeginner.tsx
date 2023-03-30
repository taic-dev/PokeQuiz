import React from "react";
import styles from "./Description.module.scss";
import Button from "@/components/ui/Button/Button";
import { Typography } from "@mui/material";

const DescriptionBeginner = () => {
  return (
    <>
      <Typography component="h1">▶︎ 初級者向け ポケモンクイズ</Typography>
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
          <div className={styles.description__button}>
            <Button link={`/beginner`}>ゲームスタート</Button>
          </div>
        </div>
        <div className={styles.description__img}>
          <img src="/img/description.png" alt="説明画像" />
        </div>
      </div>
    </>
  );
};

export default DescriptionBeginner;
