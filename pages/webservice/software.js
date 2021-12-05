import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Own from "../../components/ownSlider/own";
// import AdvisorPic from "../../components/Adviser/advisorPic";
// import Pic from "../../components/automation/pic";
const software = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <Own img1="/images/arm502.jpg" objectFit1="cover" img2="/images/software010.jpg" objectFit2="cover" img3="/images/website02.webp" objectFit3="cover" img4="/images/apps011.gif" objectFit4="co" img5="/images/apps012.jpg" objectFit5="cover" img6="/images/words.gif" objectFit6="contain" bgColor="#000" bg1Color="#000" bg2Color="" bg3Color="" bg4Color="#000" bg5Color="" bg6Color="#25292F"/>
        {/* <AdvisorPic/> */}
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>software & platforms </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
        {/* <video src="/videos/ceo.mp4" autoPlay muted loop /> */}
        <img src="/images/bi111.gif" alt="online ceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1>پلتفرم و نرم افزار های یک پارچه ساز</h1>
        <h2 id={styles.titleh2}> 
              در دنیای پر رقیب امروز کسب و کارهایی برنده هستند که پلتفرم های یکپارچه دارند و تمام امور روتین خود را روی پلتفرم خود مجموعه انجام میدهند این عمل باعث می شود کارفرمایان درگیر نرم افزارهای جزیره ای نشوند و خط مشی اصلی خود را پیگیر باشند 
        </h2>
        <button>شروع از همین امروز</button>
      </div>
    </div>
    {/* ############################################################################# Section Two */}
  
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#000" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/arm501.jpg" alt="online ceo Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#000" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های رباتیک </h1>
        <h2 style={{ color: "#fff" }}>
           طراحی و برنامه نویسی پلتفرم بازوهای رباتیک برای کنترل و مدیریت آسان بازوهای رباتیک در کارخانجات صنعتی, از زمینه های فعالیت مجموعه مدیریت آنلاین است. پلتفرم های رباتیک شامل کنترل و برنامه دهی آنلاین سیستم های رباتیک , ارتباط سیستم های رباتیک با همدیگر ,هوشمندتر کردن بستر های رباتیک و اضافه کردن هوش مصنوعی برای امور خودکار است    
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
    <div
      className={styles.section}
      style={{ direction: "ltr", background: "#fff" }}
    >
      
      <div className={styles.leftSide}>
      <img src="/images/aieyes.gif" alt="online ceo Company" />
        {/* <video src="/videos/ar2.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های پرورشی</h1>
        <h2 style={{ color: "#000" }}>
          پلتفرم های تحت وب  گلخانه ها , واحد های پرورشی, واحد های نگهداری و ... برای کنترل و مدیریت تمام فاکتورهای مورد نیاز بصورت اختصاصی , کاربردی و تحت وب در مجموعه مدیریت آنلاین انجام می شود .
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>

    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#000" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/aa300.gif" alt="online ceo Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#000" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های آنالیزی و تحلیلی </h1>
        <h2 style={{ color: "#fff" }}>
            پلتفرم های آنالیزی داده های ارسال شده از سیستم های مختلف را جمع آوری می کند و با استفاده از هوش مصنوعی و علم داده آنالیز و بصورت انواع گزارش ارائه می دهد, این قابلیت می تواند در تمام صنایع مانند پزشکی و صنعت کاربرد داشته باشد.
        </h2>
        <button> اطلاعات بیشتر</button>
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
export default software;
