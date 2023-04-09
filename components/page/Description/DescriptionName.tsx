import React, { useState } from "react";
import Link from "next/link";
import DescriptionQuizRange from "./DescriptionQuizRange";
import { Typography, Button } from "@mui/material";
import { RangeType } from "@/types";
import styles from "./Description.module.scss";

const DescriptionName = () => {
  const [range, setRange] = useState<RangeType[]>([
    { generation: 1, min: 1, max: 151, checked: true },
    { generation: 2, min: 152, max: 251, checked: true },
    { generation: 3, min: 252, max: 386, checked: true },
    { generation: 4, min: 387, max: 493, checked: true },
    { generation: 5, min: 494, max: 649, checked: true },
    { generation: 6, min: 650, max: 721, checked: true },
    { generation: 7, min: 722, max: 809, checked: true },
    { generation: 8, min: 810, max: 905, checked: true },
    { generation: 9, min: 906, max: 1008, checked: true },
  ]);

  const handleClickGameStartButton = () => {
    typeof window !== 'undefined' && localStorage.setItem(`rangeObj`, JSON.stringify(range));
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
