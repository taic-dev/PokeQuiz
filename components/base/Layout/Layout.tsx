import React, { ReactNode } from 'react'
import styles from "./Layout.module.scss";

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Layout
