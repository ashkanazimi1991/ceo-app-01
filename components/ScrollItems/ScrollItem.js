import React, { useState } from "react";

//import styles
import styles from "./scrollitem.module.css";

const ScrollItem = () => {
  const [data, setData] = useState(
    [
    {
      id: 1,
      src: "https://www.visionarywebdesigns.co.uk/assets/images/portfolio/2.png",
    },
    {
      id: 2,
      src: "https://www.visionarywebdesigns.co.uk/assets/images/portfolio/2.png",
    }
  ]
  );

  const mouseHandler = (event) => {
    const scroll = event.target.scrollHeight - 500;
    event.target.style = `--scrollNumber: -${scroll}px`;
  };
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <section key={item.id} className={styles.imageContainer}>
          <img
            onMouseEnter={mouseHandler}
            className={styles.image}
            src={item.src}
            alt="img"
          />
          <div className={styles.hover}></div>
          <h1 className={styles.hoverTitle}>title of this image</h1>
          <button className={styles.more}>more</button>
        </section>
      ))}
    </div>
  );
};

export default ScrollItem;
