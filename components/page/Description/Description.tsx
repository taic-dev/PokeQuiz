import React, { useEffect } from 'react'
import { Box } from "@mui/material";
import DescriptionName from './DescriptionName';
import styles from "./Description.module.scss";

const Description = () => {
  return (
    <Box className={styles.description__wrapper}>
      <DescriptionName/>
    </Box>
  )
}

export default Description
