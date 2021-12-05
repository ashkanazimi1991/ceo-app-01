import styles from "./Menubar.module.css";
import { FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const Menubar = () => {
  const [click, setClick] = useState(true);

  return (
    <div className={styles.main}>
      <div className={styles.container_logo}>
        <Link href="/">
          {<img id={styles.logo_img} src="/images/1.png" alt="مدیر آنلاین" />}
        </Link>
        <Link href="/">{<h1 id={styles.logo_title}>ONLINE CEO</h1>}</Link>
      </div>
      <div className={styles.center}>
        <form className={styles["form"]} action="">
          <input id={styles.input} type="search" />
          <FiSearch id={styles.icon} onClick={() => setClick(!click)} />
        </form>
      </div>
      <div className={styles.cart}>
        <HiShoppingCart href="/cart_page" id={styles.cart} />
        <span id={styles.product_number}>0</span>
      </div>
    </div>
  );
};

export default Menubar;
