import React, { useState } from "react";
import Link from "next/link"
//import styles
import styles from "./scrollitem.module.css";

const ScrollItem = ({ projects }) => {
  const mouseHandler = (event) => {
    const scroll = event.target.scrollHeight - 500;
    event.target.style = `--scrollNumber: -${scroll}px`;
  };
  return (
    <div className={styles.container}>
      {projects.map((item) => (
        <Link href={item.link ? item.link : "#"}>
          <section key={item.id} className={styles.imageContainer}>
            <img
              onMouseEnter={mouseHandler}
              className={styles.image}
              src={item.image}
              alt="img"
            />
            <div className={styles.hover}></div>
            <h1 className={styles.hoverTitle}>{item.title}</h1>
            <button className={styles.more}>Pyhton-javaScript / React-Next-Native</button>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default ScrollItem;
