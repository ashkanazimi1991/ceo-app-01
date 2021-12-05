/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from './resp.module.css'
function Resp() {
    return (
      <div className={styles["container-center-horizontal"]}>
        <div className={`${styles["frame-1"]} ${styles["screen"]}`}>
          <div className={styles["overlap-group"]}>
            <img
              className={styles["double-pic"]}
              src="images/MLP/doublePic.png"
            />
              <img
                className={styles["laptop-circle"]}
                src="images/MLP/laptopcircle.svg"
              />
            <img
              className={`${styles["phone-pic"]}`} 
              src="images/MLP/phonepic.png"
            />
            <img
              className={styles["phone-circle"]}
              src="images/MLP/phonecircle.svg"
            />
            <img
              className={styles["phone-dot"]}
              src="images/MLP/phoneDot.svg"
            />
            <img
              className={styles["laptop-dot"]}
              src="images/MLP/laptopDot.svg"
            />
            <img
              className={styles["mac-circle"]}
              src="images/MLP/maccircle.svg"
            />
            <img
              className={styles["mac-dot"]}
              src="images/MLP/macDot.svg"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Resp;
  