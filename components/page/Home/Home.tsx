import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Home.module.scss";
import HomeSlider from "./HomeSlider";
import Button from "@/components/ui/Button/Button";

const Home = () => {
  return (
    <>
      <HomeSlider>
        <Box className={styles.home}>
          <Typography className={styles.home__title}>PokeQuiz</Typography>
          <Box className={styles.home__box}>
            <Button link="/description-name">なまえのクイズ</Button>
            <Button link="/comming-soon">タイプのクイズ</Button>
            <Button link="/comming-soon">しんかのクイズ</Button>
          </Box>
        </Box>
      </HomeSlider>
    </>
  );
};

export default Home;
