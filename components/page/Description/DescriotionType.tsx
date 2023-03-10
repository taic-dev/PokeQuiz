import styles from "./Description.module.scss";
import Button from "@/components/ui/Button/Button";

export default class DescriptionType {
  levelType: string | null;

  constructor(levelType: string | null) {
    this.levelType = levelType;
  }

  levelTypeContent() {
    if (this.levelType === "beginner") {
      return (
        <>
          <div className={styles.description__text}>
            <p>
              初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。
            </p>
          </div>
          <Button link={`/${this.levelType}`}>ゲームスタート</Button>
        </>
      );
    }

    if (this.levelType === "intermediate") {
      return (
        <>
          <div className={styles.description__text}>
            <p>
              中級者むけ
            </p>
          </div>
          <Button link={`/${this.levelType}`}>ゲームスタート</Button>
        </>
      );
    }

    if (this.levelType === "advanced") {
      return (
        <>
          <div className={styles.description__text}>
            <p>
              上級者むけ
            </p>
          </div>
          <Button link={`/${this.levelType}`}>ゲームスタート</Button>
        </>
      );
    }

    return (
      <>
        存在しないページです。
      </>
    )
  }
}
