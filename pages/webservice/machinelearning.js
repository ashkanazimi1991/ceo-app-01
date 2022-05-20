import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";

const machinelearning = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
 
      </div>
      <div className={styles.video_title}>
        <h1>Machine Learning </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#142028" }}>
      <div className={styles.leftSide}>
       <img src="/images/s54.png" alt="یادگیری ماشین" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1>درباره یادگیری ماشین</h1>
        <h2 id={styles.titleh2}> 
            اگر ماشینی داده های را که از ورودی های خود بدست می آورد , بطور درست در دیتابیس خود ذخیره کند , با ایجاد یک موتور جستجوگر در داخل پلتفرم ماشین , ماشین قادر می شود از داده های قبلی خود , برای بهتر کردن فرآیند استفاده کند. این فرآیند تعریفی از یک ماشین هوشمند است. ولی این پروسه فقط برای ماشین ها نیست بلکه می توان از یادگیری ماشین در مقیاس مختلف در تمام پلتفرم ها استفاده کرد.      
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Two */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#000" }}
    >
      <div className={styles.leftSide}>
        <video src="/videos/scan010.mp4" autoPlay muted loop />
        {/* <img src="/images/aieyes.gif " alt="onlineceo Company" /> */}
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>آنالیز تصاویر</h1>
        <h2 style={{ color: "#fff" }}>
           آنالیز تصاویر در ماشین ها کمک میکند ماشین های هوشمند درک درستی از اطراف خود داشته باشند. این ویژگی امکان استفاده از ربات را در بسیاری از امور تکراری فراهم میکند.مانند تشیخص گوجه فرنگی ها رسیده.برای این مثال بازه رنگی قرمز هدف ماشین است و فقط آنهای را میچیند که در بازه رنگی تعیین شده باشد
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Three */}
    <div
      className={styles.section}
      style={{ direction: "ltr", background: "#fff" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/s56.jpg" alt="مدیریت آنلاین " />
        {/* <video src="/videos/scan010.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>
        نقشه برداری از محیط
        </h1>
        <h2 style={{ color: "#000" }}>
        برای اینکه ماشین های هوشمند بدانند که در کجا باید کار کنند باید درک و نقشه دقیقی از محیط را داشته باشند. برای اینکار بطور معمول از سنسورهای آلتراسنونیگ و در مقیاس های بزرگتر از جی پی اس استفاده می کنند و زمانی که این ماشینها با سنسور های امنیتی هم مجهز می شوند نتیجه کار می شود حرکت خودکار ماشین ها در منطقه تعریف شده بدون تصادف با موانع در مسیر.
        </h2>
        <button> اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#010106" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/99999.png" alt="online ceo Company" />
        {/* <video src="/videos/club01.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#010106" }}>
        <h1 style={{ color: "#b30000" }}> ربات های هوشمند در پزشکی</h1>
        <h2 style={{ color: "#fff" }}>
              زمانی که در ربات ها دقت های میکرومتری هست , سپردن جراحی به دستانی که هم دقت کمتری دارند هم دچار خطاهای انسانی میشوند کاری بسیار اشتباه است.جراح میتواند جراحی ها خود را تا صدها بار دقیق تر کند.دسترسی به این دقت فرآیند زمان بر و هزینه بری است ولی مجموعه آنلاین در تلاش است  این تکنولوژی را بصورت اقتصادی تر و قابل اجرایی تر وارد بازار کند.     
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>

   



    
    <style global jsx>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </Layout>
);
export default machinelearning;
