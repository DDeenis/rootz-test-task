import React from "react";
import styles from "./Team.module.scss";
import teamDesktop from "../../../public/team-desktop.png";
import teamMobile from "../../../public/team-mobile.png";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/media";

export const Team = () => {
  const isPhone = useMediaQuery(48, "em");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Our top team</h2>
        <p className={styles.descr}>
          Learn more about how you can save our planet&apos;s nature.
        </p>
      </div>
      {!isPhone ? (
        <Image
          src={teamDesktop.src}
          alt={"Three photos of team members"}
          width={teamDesktop.width}
          height={teamDesktop.height}
          blurDataURL={teamDesktop.blurDataURL}
          placeholder={"blur"}
        />
      ) : (
        <Image
          src={teamMobile.src}
          alt={"Three photos of team members"}
          width={teamMobile.width}
          height={teamMobile.height}
          blurDataURL={teamMobile.blurDataURL}
          placeholder={"blur"}
        />
      )}
    </div>
  );
};
