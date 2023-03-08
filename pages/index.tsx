import Layout from "@/components/base/Layout/Layout";
import { Typography } from "@mui/material";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <Typography className={styles.home__title}>PokeQuiz</Typography>
    </Layout>
  );
}
