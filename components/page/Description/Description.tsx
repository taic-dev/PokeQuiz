import React, { useEffect } from 'react'
import { Box } from "@mui/material";
import Button from "@/components/ui/Button/Button";
import DescriptionType from './DescriotionType';

const Description = () => {
  const param = new URLSearchParams(location.search);
  const level = param.get("type");
  const text = new DescriptionType(level);

  return (
    <Box>
      {text.levelTypeText()}
      <Button link="">ゲームスタート</Button>
    </Box>
  )
}

export default Description
