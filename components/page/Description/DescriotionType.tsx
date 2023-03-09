import styles from "./Description.module.scss";

export default class DescriptionType {
  levelType: string | null;

  constructor(levelType: string | null) {
    this.levelType = levelType;
  }

  levelTypeText() {
    if(this.levelType === "beginner") {
      return (
        <div className={styles.description__text}>
          <p>初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。</p>
        </div>
      );
    }

    if(this.levelType === "intermediate") {
      return (
        <div className={styles.description__text}>
          <p>中級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。</p>
        </div>
      )
    }

    if(this.levelType === "advanced") {
      return (
        <div className={styles.description__text}>
          <p>上級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。初級者向けの説明を入れます。</p>
        </div>
      )
    }
  }

}