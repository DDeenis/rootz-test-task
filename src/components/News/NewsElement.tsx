import Image, { StaticImageData } from "next/image";
import React from "react";
import { IconPlay } from "../Icons/IconPlay";
import styles from "./NewsElement.module.scss";

type Props = {
  img: StaticImageData;
  title: string;
  tag: string;
  url: string;
  isVideo?: boolean;
};

export const NewsElement = ({
  img,
  tag,
  title,
  url,
  isVideo = false,
}: Props) => {
  return (
    <div className={styles.container}>
      {isVideo ? (
        <VideoImage img={img} alt={title} />
      ) : (
        <Image
          {...img}
          alt={title}
          className={styles.img}
          objectFit={"cover"}
          layout={"fixed"}
          placeholder={"blur"}
        />
      )}
      <div className={styles.content}>
        <span className={styles.tag}># {tag}</span>
        <p className={styles.title}>{title}</p>
        <a href={url} className={styles.link}>
          see more
        </a>
      </div>
    </div>
  );
};

const VideoImage = ({ img, alt }: { img: StaticImageData; alt: string }) => {
  return (
    <div className={styles.videoImgContainer}>
      <Image
        {...img}
        alt={alt}
        objectFit={"cover"}
        className={styles.imgVideo}
        placeholder={"blur"}
      />
      <IconPlay />
    </div>
  );
};
