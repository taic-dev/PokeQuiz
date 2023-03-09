import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Home.module.scss";
import HomeButton from "@/components/ui/HomeButton/HomeButton";

const index = () => {
  return (
    <>
      <Typography className={styles.home__title}>PokeQuiz</Typography>
      <Box className={styles.home__box}>
        <HomeButton link="/">初級者向けクイズ</HomeButton>
        <HomeButton link="/">中級者向けクイズ</HomeButton>
        <HomeButton link="/">上級者向けクイズ</HomeButton>
      </Box>
    </>
  );
};

export default index;
