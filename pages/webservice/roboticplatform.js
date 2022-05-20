import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
const roboticplatform = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
       
      </div>
      <div className={styles.video_title}>
        <h1>Robotic Platforms </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#142028" }}>
      <div className={styles.leftSide}>
       <img src="/images/iot800.jpg" alt="پلتفرم رباتیک" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#b30000" }}> پلتفرم های رباتیک</h1>
        <h2 style={{ color: "#fff" }}> 
              پلتفرم های رباتیک شامل نرم افزار های  تحت وبی است که برپایه یادگیری ماشین و هوش مصنوعی برنامه نویسی می شود که برنامه دهی ربات ها و ماشین ها را امکانپذیر می کند, مانند برنامه دهی و کنترل بازوهای رباتیک (تکی و تیمی) یا کنترل ماشین آلات حمل و انتقال یا ربات های خدماتی و ..      
        </h2>
        <button>اطلاعات بیشتر و ثبت سفارش از فروشگاه</button>
      </div>
    </div>
    {/* ############################################################################# Section Two */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#000" }}
    >
      <div className={styles.leftSide}>
        {/* <video src="/videos/ceo.mp4" autoPlay muted loop /> */}
        <img src="/images/selfdrive080.png " alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>پلتفرم های رباتیک در صنعت</h1>
        <h2 style={{ color: "#fff" }}>
           پلتفرم رباتیک یک کسب و کار صنعتی شامل کنترل و مدیریت آنلاین تمام ربات ها و ماشین ها است , که در یک بستر یکپارچه , بصورت اختصاصی کدنویسی می شود تا مدیران از سراسر جهان  بتوانند تمام اتوماسیون خود را کنترل کنند و یا متغییرهای کسب و کار خود را تغییر دهند.
        </h2>
        <button> اطلاعات بیشتر و ثبت سفارش از فروشگاه</button>
      </div>
    </div>
    {/* ############################################################################# Section Three */}
    <div
      className={styles.section}
      style={{ direction: "ltr", background: "#142028" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/s51.jpg" alt="مدیریت آنلاین " />
        {/* <video src="/videos/scan010.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#142028" }}>
        <h1 style={{ color: "#b30000" }}>
        پلتفرم های رباتیک در کشاورزی
        </h1>
        <h2 style={{ color: "#fff" }}>
        برنامه نویسی پلتفرم ربات های گلخانه و مزارع بصورت اختصاصی , برای انجام امور روتین کاشت , داشت و برداشت توسط ربات , همچنین طراحی و اجرا ربات های اختصاصی مجهز به هوش مصنوعی و یادگیری ماشین برای مزارع توسط مجموعه مدیریت آنلاین انجام می شود.
        </h2>
        <button>  اطلاعات بیشتر و ثبت سفارش از فروشگاه</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#010106" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/99999.png" alt="مدیریت آنلاین" />
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
      style={{ direction: "rtl", background: "#142028" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/s52.jpg" alt="پلتفرم رباتیک" />
        {/* <video src="/videos/club01.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#142028" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های رباتیک در مزارع</h1>
        <h2 style={{ color: "#fff" }}>
              ربات ها می توانند تمام امور خسته کننده را در محیط های مختلف به بهترین شکل انجام دهند, مخصوصا در مزارع پرورشی که امور روتین و تکراری نیاز است , حذف نیرو انسانی باعث کاهش اتلاف انرژی , افزایش راندمان و هزینه کمتر می شود. در واحدی ایزوله انسان ها عامل اصلی انتقال بیماری ها هستند که در سیستم های رباتیک این مشکلات حل می شود. علاوه برآن با کمک هوش مصنوعی مزارع همیشه در حالت ایده آل خود هستند , راندمان مجموعه به طرز چشمگیری افزایش می یابد.   
        </h2>
        <button>اطلاعات بیشتر و ثبت سفارش از فروشگاه </button>
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
export default roboticplatform;
