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

  return (
    <div className={`${styles["tweet-area"]} ${show && styles["tweet-area--hidden"]}`}>
      <div className={styles["tweet-area__box"]}>
        <span onClick={()=>handleClickHidden()}>
          <Image src="/img/cross-icon.png" alt="罰アイコン" width={30} height={30} unoptimized />
        </span>
        <div className={styles["tweet-area__box-desc"]}>
          <h2>10問中<span>{arrayDiff(answerArray, questionArray?.[1]?.answer)}問</span>正解！！</h2>
          <p>ポケクイズの記録をツイートしよう！！</p>
        </div>
        <div className={styles["tweet-area__box-btn"]}>
          <TwitterButton url=" https://twitter.com/intent/tweet?hashtags=foo,bar,baz" />
          <Button variant="contained" onClick={()=>handleClickReload()}>TOPへ</Button>
        </div>
      </div>
    </div>
  )
}
