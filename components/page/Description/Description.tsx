import React, { useEffect } from 'react'
import { Box } from "@mui/material";
import Button from "@/components/ui/Button/Button";
import DescriptionType from './DescriotionType';
import styles from "./Description.module.scss";

const Description = () => {
  const param = new URLSearchParams(location.search);
  const level = param.get("type");
  const text = new DescriptionType(level);

  return (
    <Box className={styles.description__box}>
      {text.levelTypeText()}
      <Button link="">ゲームスタート</Button>
    </Box>
  )
}

export default Description
