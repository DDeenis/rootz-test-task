import Image from "next/image";
import React from "react";
import { IconPlay } from "../Icons/IconPlay";
import styles from "./NewsElement.module.scss";

type Props = {
  img: string;
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
  console.log(tag, isVideo);

  return (
    <div className={styles.container}>
      {isVideo ? (
        <VideoImage img={img} alt={title} />
      ) : (
        <Image
          src={img}
          alt={title}
          width={112}
          height={112}
          className={styles.img}
          objectFit={"cover"}
          layout={"fixed"}
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

const VideoImage = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className={styles.videoImgContainer}>
      <Image src={img} alt={alt} width={160} height={112} objectFit={"cover"} />
      <IconPlay />
    </div>
  );
};
