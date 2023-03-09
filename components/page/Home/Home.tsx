import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Home.module.scss";
import Button from "@/components/ui/Button/Button";

const Home = () => {
  return (
    <>
      <Typography className={styles.home__title}>PokeQuiz</Typography>
      <Box className={styles.home__box}>
        <Button link="/description?type=beginner">初級者向けクイズ</Button>
        <Button link="/description?type=intermediate">中級者向けクイズ</Button>
        <Button link="/description?type=advanced">上級者向けクイズ</Button>
      </Box>
    </>
  );
};

export default Home;
