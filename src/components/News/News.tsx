import React from "react";
import styles from "./News.module.scss";
import { NewsElement } from "./NewsElement";
import img1 from "../../../public/news1.png";
import img2 from "../../../public/news2.png";
import img3 from "../../../public/news3.png";

export const News = () => {
  return (
    <div className={styles.container}>
      <NewsElement
        img={img1}
        title={"Travel In Japan: The True Experience"}
        tag={"Stories"}
        url={"example.com"}
      />
      <NewsElement
        img={img2}
        title={"Helping Wild Turtles"}
        tag={"VideoTutor"}
        url={"example.com"}
        isVideo
      />
      <NewsElement
        img={img3}
        title={"Threats of Indusrial World"}
        tag={"Photostory"}
        url={"example.com"}
      />
    </div>
  );
};
