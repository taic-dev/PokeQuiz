import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Home.module.scss";
import Button from "@/components/ui/Button/Button";

const Home = () => {
  return (
    <>
    <Box className={styles.home}>
      <Typography className={styles.home__title}>PokeQuiz</Typography>
      <Box className={styles.home__box}>
        <Button link="/description">初級者向けクイズ</Button>
        <Button link="/description">中級者向けクイズ</Button>
        <Button link="/description">上級者向けクイズ</Button>
      </Box>
    </Box>
    </>
  );
};

export default Home;
