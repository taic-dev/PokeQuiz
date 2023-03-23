import styles from "./Description.module.scss";
import Button from "@/components/ui/Button/Button";
import { Typography } from "@mui/material";

export default class DescriptionType {
  levelType: string | null;

  constructor(levelType: string | null) {
    this.levelType = levelType;
  }

  levelTypeContent() {
    if (this.levelType === "beginner") {
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
            <Button link={`/${this.levelType}`}>ゲームスタート</Button>
          </div>
        </>
      );
    }

    if (this.levelType === "intermediate") {
      return (
        <>
          <div className={styles.description__text}>
            <p>中級者むけ</p>
          </div>
          <Button link={`/${this.levelType}`}>ゲームスタート</Button>
        </>
      );
    }

    if (this.levelType === "advanced") {
      return (
        <>
          <div className={styles.description__text}>
            <p>上級者むけ</p>
          </div>
          <Button link={`/${this.levelType}`}>ゲームスタート</Button>
        </>
      );
    }

    return <>存在しないページです。</>;
  }
}
