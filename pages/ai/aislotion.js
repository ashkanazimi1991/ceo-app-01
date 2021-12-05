import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Own from "../../components/ownSlider/own";
// import AdvisorPic from "../../components/Adviser/advisorPic";
// import Pic from "../../components/automation/pic";
const aislotion = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <Own img1="/images/arm502.jpg" objectFit1="cover" img2="/images/iot800.jpg" objectFit2="cover" img3="/images/robotic1010.gif" objectFit3="cover" img4="/images/robotic1011.jpg" objectFit4="cover" img5="/images/robotic05.gif" objectFit5="cover" img6="/images/office03.jpg" objectFit6="cover" bgColor="#000" bg1Color="#fff" bg2Color="#231A2B" bg3Color="" bg4Color="#fff" bg5Color="#000" bg6Color="#fff"/>
        {/* <AdvisorPic/> */}
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>Robotic Platforms </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
       <img src="/images/iot310.jpg" alt="online ceo Company" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1> پلتفرم های رباتیک</h1>
        <h2 id={styles.titleh2}> 
              پلتفرم های رباتیک شامل نرم افزار های  تحت وبی است که برپایه یادگیری ماشین و هوش مصنوعی برنامه نویسی می شود که برنامه دهی ربات ها و ماشین ها را امکانپذیر می کند, مانند برنامه دهی و کنترل بازوهای رباتیک (تکی و تیمی) یا کنترل ماشین آلات حمل و انتقال یا ربات های خدماتی و ..      
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
        <img src="/images/robotic6655.gif " alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>پلتفرم های رباتیک در صنعت</h1>
        <h2 style={{ color: "#fff" }}>
           پلتفرم رباتیک یک کسب و کار صنعتی شامل کنترل و مدیریت آنلاین تمام ربات ها و ماشین ها است , که در یک بستر یکپارچه , بصورت اختصاصی کدنویسی می شود تا مدیران از سراسر جهان  بتوانند تمام اتوماسیون خود را کنترل کنند و یا متغییرهای کسب و کار خود را تغییر دهند.
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
        {/* <img src="/images/robotic432.jpg" alt="مدیریت آنلاین " /> */}
        <video src="/videos/scan010.mp4" autoPlay muted loop />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>
        پلتفرم های رباتیک در کشاورزی
        </h1>
        <h2 style={{ color: "#000" }}>
        برنامه نویسی پلتفرم ربات های گلخانه و مزارع بصورت اختصاصی , برای انجام امور روتین کاشت , داشت و برداشت توسط ربات , همچنین طراحی و اجرا ربات های اختصاصی مجهز به هوش مصنوعی و یادگیری ماشین برای مزارع توسط مجموعه مدیریت آنلاین انجام می شود.
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
        <h1 style={{ color: "#b30000" }}>پلتفرم های رباتیک در پزشکی</h1>
        <h2 style={{ color: "#fff" }}>
              یکی از دلایل استفاده از ربات ها دقت بسیار بالای آنهاست که در بازوهای جراحی حتی به دقت های میکرومتری می رسد , به همین دلیل در کشور های پیشرفته , برای انجام جراحی های دقیق از ربات ها استفاده می کنند , از این رو مجموعه برنامه نویسی مدیر آنلاین شروع به برنامه نویسی ربات های جراح کرده که در سال 1402 وارد بازار ایران و سایر کشورها می شود..    
        </h2>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>

    {/* ############################################################################# Section Five */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#fff" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/robotic400.webp" alt="online ceo Company" />
        {/* <video src="/videos/club01.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های رباتیک در پرورش دام و طیور</h1>
        <h2 style={{ color: "#000" }}>
              ربات ها می توانند تمام امور خسته کننده را در محیط های مختلف به بهترین شکل انجام دهند, مخصوصا در واحد های پرورشی صنعتی , ایزوله کردن واحد با حذف نیرو انسانی باعث کاهش بیماری ها می شود و چون با کمک هوش مصنوعی فارم همیشه در حالت ایده آل خود است , راندمان مجموعه به طرز چشمگیری افزایش می یابد.   
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
export default aislotion;
