import React, { useEffect } from 'react'
import { Box } from "@mui/material";
import DescriptionType from './DescriotionType';
import styles from "./Description.module.scss";

const Description = () => {
  const param = new URLSearchParams(location.search);
  const level = param.get("type");
  const text = new DescriptionType(level);

  return (
    <Box className={styles.description__box}>
      {text.levelTypeContent()}
    </Box>
  )
}

export default Description
