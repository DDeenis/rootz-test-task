import Image from "next/image";
import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./CallToLogin.module.scss";
import leafs from "../../../public/cta-leafs.svg";

export const CallToLogin = () => {
  return (
    <div className={styles.contaner}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Get started today!</h2>
        <p className={styles.text}>
          Learn more about how you can save our planet&apos;s nature. From smart
          consumption to switching to renewable energy, each of us can do our
          part to save the planet.{" "}
        </p>
      </div>
      <div className={styles.loginContainer}>
        <span className={styles.loginContainerTitle}>Log in</span>
        <div className={styles.loginContainerInputs}>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </div>
        <Button>Book a demo</Button>
        <div className={styles.loginContainerLeafs}>
          <Image {...leafs} alt={"Leafs"} />
        </div>
      </div>
    </div>
  );
};
