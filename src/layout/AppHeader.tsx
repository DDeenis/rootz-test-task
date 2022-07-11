import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import { IconClose } from "../components/Icons/IconClose";
import { IconLogo } from "../components/Icons/IconLogo";
import { IconMenu } from "../components/Icons/IconMenu";
import styles from "./styles/AppHeader.module.scss";

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    document.body.style.position = "fixed";
    setIsOpen(true);
  };

  const onClose = () => {
    document.body.style.position = "static";
    setIsOpen(false);
  };

  return (
    <header className={clsx(isOpen && styles.headerFull)}>
      <div className={styles.headerDesktop}>
        <IconLogo />
        <Nav className={styles.navPrimary} />
        <Button variant="secondary" maxW={145}>
          Apply
        </Button>
      </div>
      <div
        className={clsx(
          styles.headerMobileContainer,
          isOpen && styles.headerMobilePadding
        )}
      >
        <div className={styles.headerMobile}>
          <IconLogo />
          <button
            className={styles.headerBtnMobile}
            onClick={isOpen ? onClose : onOpen}
          >
            {isOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
        {isOpen && (
          <>
            <Nav className={styles.navPrimaryMobile} />
            <Button variant="secondary">Apply</Button>
          </>
        )}
      </div>
    </header>
  );
};

const Nav = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
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
  );
};
