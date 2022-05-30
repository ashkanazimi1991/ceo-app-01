import styles from "./footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div style={{ minWidth: "320px" }}>
      <div className={styles.grid}>
        <div className={styles.column1}>
          <h1 id={styles.title}>درباره ما</h1>
          <h2 id={styles.subTitle}>گواهی و افتخارات</h2>
          <h2 id={styles.subTitle}>مجوزها</h2>
          <h2 id={styles.subTitle}>ارتباط با ما</h2>
          <h2 id={styles.subTitle}>گالری تصاویر</h2>
          <h2 id={styles.subTitle}>حریم خصوصی</h2>
        </div>
        <div className={styles.column2}>
          <h1 id={styles.title}>خدمات</h1>
          <h2 id={styles.subTitle}>برنامه نویسی نرم افزار</h2>
          <h2 id={styles.subTitle}>امنیت و پشتیبانی</h2>
          <h2 id={styles.subTitle}>سئو و ارتقا</h2>
          <h2 id={styles.subTitle}>خبرنامه تکنولوژی های جدید</h2>
          <h2 id={styles.subTitle}>کار آفرینی و اجرا</h2>
        </div>
        <div className={styles.column3}>
          <h1 id={styles.title}>پشتیبانی</h1>
          <h2 id={styles.subTitle}> تماس با اپراتور</h2>
          <h2 id={styles.subTitle}>پشتیبانی محصولات</h2>
          <h2 id={styles.subTitle}>پشتیبانی خدمات</h2>
          <h2 id={styles.subTitle}>انتقاد و پیشنهاد</h2>
          <h2 id={styles.subTitle}>تماس با مدیریت</h2>
        </div>
        <div className={styles.column4}>
          <h1 id={styles.title}>محصولات</h1>
          <h2 id={styles.subTitle}>فروشگاه رباتیک</h2>
          <h2 id={styles.subTitle}>فروشگاه اینترنت اشیا</h2>
          <h2 id={styles.subTitle}>پکیج های آموزشی</h2>
          <h2 id={styles.subTitle}>دیتا سنتر</h2>
          <h2 id={styles.subTitle}>خدمات بین الملل</h2>
        </div>
      </div>
      <div
        style={{
          fontSize: "12px",
          textAlign: "center",
          fontcolor: "#fff",
          padding: "20px",
          backgroundColor:"#131A22",
        }}
      >
        <h1 style={{color:"#7F8487",fontSize:"14px"}}>
        Iran - urmia - sheykhtape - N10  
        </h1>
        <h1 style={{color:"#7F8487",fontSize:"14px"}}>Tell : 04433384232 </h1>
      </div>
      <div className={styles.bottomLogo}>
        <Link href="/" passHref>
          <h1>ONLINE CEO</h1>
        </Link>
        <a>
          OnlinCEO Programing company {new Date().getFullYear()} All rights
          reserved
        </a>
        <div className={styles["fotterLogo"]}>
          {/* <div className={styles.otherlogo}><FaFacebook id={styles.facebook} /></div> */}
          <div className={styles.otherlogo}>
            <a href="https://www.instagram.com/onlineceoofficial" target="instagram" rel="noreferrer">
              <FaInstagram id={styles.instagram} />
            </a>
          </div>
          <div className={styles.otherlogo}>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter id={styles.twitter} />
            </a>
          </div>
          <div className={styles.otherlogo}>
            <a
              href="https:/wa.me/989333936405"
              target="whatsapp"
              rel="noreferrer"
            >
              <FaWhatsapp id={styles.whatsapp} />
            </a>
          </div>
          <div className={styles.otherlogo}><FaYoutube id={styles.youtube} /></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
