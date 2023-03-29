import React from "react";
import styles from "./Description.module.scss";
import Button from "@/components/ui/Button/Button";
import { Typography } from "@mui/material";

const DescriptionBeginner = () => {
  return (
    <>
      <Typography component="h1">▶︎ 初級者向け ポケモンクイズ</Typography>
      <Typography component="h2">▶︎ ルール説明</Typography>
      <p className={styles.description__text}>
        初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。
      </p>
      <div className={styles.description__img}>
        <img src="/img/description.png" alt="説明画像" />
      </div>
      <div className={styles.description__button}>
        <Button link={`/beginner`}>ゲームスタート</Button>
      </div>
    </>
  );
};

export default DescriptionBeginner;
