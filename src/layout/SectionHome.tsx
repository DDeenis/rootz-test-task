import React from "react";
import styles from "./styles/Home.module.scss";
import headline from "../../public/headline.png";
import Image from "next/image";
import { Input } from "../components/Input/Input";

export const SectionHome = () => {
  return (
    <div className={styles.container}>
      <Image
        src={headline.src}
        alt="Nature needs you"
        width={563}
        height={293}
        layout="intrinsic"
      />
      <Input placeholder="Amogus" />
    </div>
  );
};
