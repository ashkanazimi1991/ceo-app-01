import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Own from "../../components/ownSlider/own";
// import AdvisorPic from "../../components/Adviser/advisorPic";
// import Pic from "../../components/automation/pic";
const blockchain = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <Own img1="/images/bitcoinw.jpg" objectFit1="cover" img2="/images/crypto120.gif" objectFit2="contain" img3="/images/crypto.webp" objectFit3="cover" img4="/images/crypto100.webp" objectFit4="cover" img5="/images/crypto202.gif" objectFit5="cover" img6="/images/crypto205m.gif" objectFit6="contain" bgColor="#000" bg1Color="#fff" bg2Color="#231A2B" bg3Color="" bg4Color="#fff" bg5Color="#000" bg6Color="#000"/>
        {/* <AdvisorPic/> */}
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>Blockchain Services </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#F5F8FF" }}>
      <div className={styles.leftSide}>
       <img src="/images/blockchain1.gif" alt="online ceo Company" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1> درباره بلاک چین</h1>
        <h2 id={styles.titleh2}> 
           بلاک چین یک پایگاه داده توزیع شده است, که در یک شبکه کامپیوتری به اشتراک گذاشته می شود و هر قراردادی که به این شبکه اضافه می شود بصورت منحصر بفرد و برای همیشه ذخیر می شود و همه شبکه بلاک چین به نقل و انتقال های این قرارداد شاهد هستند .این ویژگی کاربردهای زیادی دارد که محبوب ترینشان رمز ارز ها هستند   
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
        {/* <video src="/videos/ceo.mp4" autoPlay muted loop /> */}
        <img src="/images/ethereum.gif " alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>ساخت توکن و کوین </h1>
        <h2 style={{ color: "#fff" }}>
          پروسه تولید توکن بر روی  بلاک چین اتریم و بیت کوین , از صفر تا صد در مجموعه مدیریت آنلاین انجام می شود .  مجموعه ها یا افرادی که خواهان ساخت توکن و کوین اختصاصی با تایید قرارداد و دریافت استاندارد های لازم و حتی بارگذاری در صرافی های بین المللی هستند , کافی است با مجموعه برنامه نویسی مدیریت آنلاین تماس بگیرند.
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
        <img src="/images/cryptopay2.gif" alt="مدیریت آنلاین " />
        {/* <video src="/videos/exchange2.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>
          درگاه های دریافت و پرداخت با توکن و رمز ارز
        </h1>
        <h2 style={{ color: "#000" }}>
        اگر در تلاش هستید کسب و کار خود را جهانی کنید , یا در گیر مشکلات بانکی در تجارت بین کشورها هستید , با اضافه کردن درگاه های کریپتو به پلتفرم خود میتوانید , سریع , امن و ارزان با رمز ارز معاملات خود را انجام دهید, تمام پلتفرم های مجموعه مدیریت آنلاین میتوانند به راحتی بخدمات بلاک چینی دسترسی پیدا کنند         
        </h2>
        <button> اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#262E31" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/blackchain201.gif" alt="online ceo Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "" }}>
        <h1 style={{ color: "#b30000" }}>راه اندازی بلاک چین اختصاصی  </h1>
        <h2 style={{ color: "#fff" }}>
              کار آفرین و سرمایه گذاران که به رمز ارز علاقه مند هستند, با همکاری مجموعه مدیریت آنلاین , می توانند , بلاک چین اختصاصی , پلتفرم تبادل و معامله رمزارز و هزاران توکن اختصاصی برای خود داشته باشند و آن را گسترش دهند. 
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
export default blockchain;
