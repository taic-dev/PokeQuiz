import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { TweetAreaProps } from "@/types";
import { TwitterButton } from '@/components/ui/TwitterButton/TwitterButton';
import { Button } from '@mui/material'
import arrayDiff from '@/util/arrayDiff';
import styles from './Tweet.module.scss'

export const TweetArea = ({ answerArray, questionArray, show, setShow }: TweetAreaProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClickHidden = () => setShow(false);

  const handleClickReload = () => {
    dispatch({ type: "CLEAR_STATE" })
    router.push("/");
  }

  const count = arrayDiff(answerArray, questionArray?.[1]?.answer)
  const url = `https://twitter.com/intent/tweet?text=【めざせポケモンマスター】%0D%0Aポケクイズ10問中...${count}問正解!!%0D%0A%0D%0Ahttps://poke-quiz-psi.vercel.app/%0D%0A%0D%0A&hashtags=PokeQuiz,ポケクイズ,めざせポケモンマスター`;

  return (
    <div className={`${styles["tweet-area"]} ${show && styles["tweet-area--hidden"]}`}>
      <div className={styles["tweet-area__box"]}>
        <span onClick={()=>handleClickHidden()}>
          <Image src="/img/cross-icon.png" alt="罰アイコン" width={30} height={30} unoptimized />
        </span>
        <div className={styles["tweet-area__box-desc"]}>
          <h2>10問中<span>{count}問</span>正解！！</h2>
          <p>ポケクイズの記録をツイートしよう！！</p>
        </div>
        <div className={styles["tweet-area__box-btn"]}>
          <TwitterButton url={url} />
          <Button variant="contained" onClick={()=>handleClickReload()}>TOPへ</Button>
        </div>
      </div>
    </div>
  )
}
