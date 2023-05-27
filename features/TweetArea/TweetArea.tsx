import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import styles from './Tweet.module.scss'
import { Button } from '@mui/material'

type TweetAreaProps = {
  show : boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const TweetArea = ({ show, setShow }: TweetAreaProps) => {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClickHidden = () => {
    setShow(false);
  }

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
        <Button>テスト</Button>
        <Button onClick={()=>handleClickReload()}>TOPへ</Button>
      </div>
    </div>
  )
}
