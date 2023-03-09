import React,{ ReactNode } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import styls from "./HomeButton.module.scss";

interface Props {
  link?: string
  children?: ReactNode
}

const HomeButton = ({ link, children }: Props) => {

  return (
    <Button
      variant="contained"
      component={Link}
      href={link}
      className={styls.homeButton}
    >
      ▶︎ {children}
    </Button>
  );
};

export default HomeButton;
