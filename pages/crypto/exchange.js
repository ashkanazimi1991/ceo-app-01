import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Own from "../../components/ownSlider/own";
// import AdvisorPic from "../../components/Adviser/advisorPic";
// import Pic from "../../components/automation/pic";
const exchange = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <Own img1="/images/crypto200.jpg" objectFit1="cover" img2="/images/crypto120.gif" objectFit2="contain" img3="/images/crypto.webp" objectFit3="cover" img4="/images/crypto100.webp" objectFit4="cover" img5="/images/crypto202.gif" objectFit5="cover" img6="/images/crypto205m.gif" objectFit6="contain" bgColor="#000" bg1Color="#fff" bg2Color="#231A2B" bg3Color="" bg4Color="#fff" bg5Color="#000" bg6Color="#000"/>
        {/* <AdvisorPic/> */}
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>Crypto Exchange </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
       <img src="/images/crypto435.gif" alt="online ceo Company" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1> درباره رمز ارز</h1>
        <h2 id={styles.titleh2}> 
      در زمان کنونی رمز ارز سریع ترین , امن ترین و کم هزینه ترین راه نقل و انتقال سرمایه است.شما می توانید میلیاردها دلار را در یک ایمیل جابجا کنید یا در کیف پول های خود داشته باشید بدون آن که نگران مسایل روتین نظام بانکی باشید. با توجه به صدها مزیت کریپتو , مجموع مدیریت آنلاین نیز تمام پلتفرم های خود را با امکان اتصال به درگاه های خرید و فروش با رمز ارز و تراکنش های بلاک چینی مجهز کرده تا جدیدترین تکنولوژی های جهان را در خدمت کاربران خود قرار دهد..,   
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Two */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#100F1A" }}
    >
      <div className={styles.leftSide}>
        {/* <video src="/videos/ceo.mp4" autoPlay muted loop /> */}
        <img src="/images/cryptoclub.gif " alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>صرافی های ارز دیجیتال </h1>
        <h2 style={{ color: "#fff" }}>
          صرافی های ارز دیجیتال پلتفرم های هستند که در آن می توانید در عرض چند دقیقه رمز ارز های خود را به انواع واحد های مالی تبدیل کنید, یا خرید و فروش رمزارز انجام دهید, صرافی های بسیاری در جهان هستند که سالهاست به فعالیت خود ادامه می دهند, شما هم می توانید یک صرافی داشته باشید  .
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
        <img src="/images/club010.gif" alt="مدیریت آنلاین " />
        {/* <video src="/videos/exchange2.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>
          برنامه نویسی و اجرا صرافی های ارز دیجیتال
        </h1>
        <h2 style={{ color: "#000" }}>
        مجموعه مدیریت آنلاین آماده است که پلتفرم های یکپارچه , مقیاس پذیر , بین المللی ,با زبان تمام کشورهای جهان بروی تمام دستگاهای ویندوز , اندروید , ای او اس بصورت یکپارچه در دیتا سنترهای اختصاصی ارائه دهد.         
        </h2>
        <button> اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#101112" }}
    >
      <div className={styles.leftSide}>
      <img src="/images/crypto650.gif " alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#101112" }}>
        <h1 style={{ color: "#b30000" }}>کیف پول و نرم افزار های کمکی  </h1>
        <h2 style={{ color: "#fff" }}>
              برنامه نویسی و اجرا انواع کیف پول های بلاک چینی بصورت اختصاصی در مجموعه مدیریت آنلاین با متد روز امنیتی اجرا می شود , همچنین انواع نرم افزار های کمکی معاملات ارزی و درگاه های دریافت و پرداخت ارز دیجیتال برای تمام کسب و کارها قابل ارائه می باشد. 
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
export default exchange;
