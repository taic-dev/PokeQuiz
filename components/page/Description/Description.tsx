import React, { useEffect } from 'react'
import { Box } from "@mui/material";
import DescriptionName from './DescriptionName';
// import DescriptionType from './DescriotionType';
import styles from "./Description.module.scss";

const Description = () => {
  // const param = new URLSearchParams(location.search);
  // const level = param.get("type");
  // const content = new DescriptionType(level);

  return (
    <Box className={styles.description__wrapper}>
      <DescriptionName/>
    </Box>
  )
}

export default Description
