import React from "react";
import styles from "./styles/HomeSection.module.scss";
import headline from "../../public/headline.svg";
import parrot from "../../public/parrot.svg";
import cardBg from "../../public/cardBg.svg";
import Image from "next/image";
import { Input } from "../components/Input/Input";
import { IconLocation } from "../components/Icons/IconLocation";
import { Button } from "../components/Button/Button";
import { IconHead } from "../components/Icons/IconHead";

export const HomeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Image
          src={headline.src}
          alt="Nature needs you"
          width={headline.width}
          height={headline.height}
        />
        <div className={styles.content}>
          <p className={styles.contentText}>
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </p>
          <Input
            size="lg"
            placeholder="Find the place to help"
            rightElement={<IconLocation />}
            leftElement={<Button maxW={115}>Search</Button>}
          />
        </div>
      </div>
      <aside className={styles.aside}>
        {/* <Image
          src={parrot.src}
          alt="Parrot"
          width={parrot.width}
          height={parrot.height}
          layout={"fixed"}
        /> */}
        <img src={parrot.src} alt="Parrot" className={styles.asideImg} />
        <div className={styles.card}>
          <Image
            src={cardBg.src}
            alt="Parrot"
            width={cardBg.width}
            height={cardBg.height}
          />
          <div className={styles.cardContent}>
            <IconHead />
            <div className={styles.cardContentTextContainer}>
              <p>Members</p>
              <span>29 128</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
