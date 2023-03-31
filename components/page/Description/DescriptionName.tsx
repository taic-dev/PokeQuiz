import React, { useState } from "react";
import Link from "next/link";
import DescriptionQuizRange from "./DescriptionQuizRange";
import { Typography, Button } from "@mui/material";
import styles from "./Description.module.scss";

interface rangeType {
  generation: number;
  checked: boolean;
}

const DescriptionName = () => {
  const [range, setRange] = useState<rangeType[]>([
    { generation: 1, checked: true },
    { generation: 2, checked: true },
    { generation: 3, checked: true },
    { generation: 4, checked: true },
    { generation: 5, checked: true },
    { generation: 6, checked: true },
    { generation: 7, checked: true },
    { generation: 8, checked: true },
    { generation: 9, checked: true },
  ]);

  const handleClickGameStartButton = () => {
    localStorage.setItem(`rangObj`, JSON.stringify(range));
  };

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
          <DescriptionQuizRange range={range} setRange={setRange} />
          <div className={styles.description__button}>
            <Button
              variant="contained"
              component={Link}
              href={`/quiz-name`}
              onClick={handleClickGameStartButton}
            >
              ▶︎ ゲームスタート
            </Button>
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
