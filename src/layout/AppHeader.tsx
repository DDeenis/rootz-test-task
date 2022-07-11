import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Button } from "../components/Button/Button";
import { IconLogo } from "../components/Icons/IconLogo";
import styles from "./styles/AppHeader.module.scss";

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <IconLogo />
      <nav className={styles.navPrimary}>
        <Link href={"/"} passHref>
          <a className={clsx(styles.navItem, styles.navItem_active)}>Home</a>
        </Link>
        <Link href={"/mission"}>
          <a className={styles.navItem}>Our mission</a>
        </Link>
        <Link href={"/places"} className={styles.navItem}>
          <a className={styles.navItem}>Places</a>
        </Link>
        <Link href={"/team"} className={styles.navItem}>
          <a className={styles.navItem}>Team</a>
        </Link>
      </nav>
      <Button variant="secondary" maxW={145}>
        Apply
      </Button>
    </header>
  );
};
