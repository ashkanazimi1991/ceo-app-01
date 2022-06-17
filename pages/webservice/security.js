import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
// import Own from "../../components/ownSlider/own";
// import AdvisorPic from "../../components/Adviser/advisorPic";
// import Pic from "../../components/automation/pic";
const security = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        {/* <Own img1="/images/apps013.jpg" objectFit1="cover" img2="/images/cyber014.gif" objectFit2="contain" img3="/images/" objectFit3="cover" img4="/images/card010.jpg" objectFit4="co" img5="/images/password.gif" objectFit5="cover" img6="/images/cyber016.gif" objectFit6="contain" bgColor="#000" bg1Color="#000" bg2Color="#000" bg3Color="" bg4Color="#000" bg5Color="" bg6Color="#000"/> */}
        {/* <AdvisorPic/> */}
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>Cyber Security </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
       <img src="/images/cyber01.gif" alt="online ceo Company" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1>کسب کار بدون امنیت معنا ندارد</h1>
        <h2 id={styles.titleh2}> 
              تمام پلتفرم های اینترنتی خواسته یا ناخواسته مورد حملات سایبری قرار میگیرند و فقط بحث زمان مطرح است. اگر خوش شانس باشید چند ماه دیرتر, امروز که تمام فضای دارک وب به فروشگاه انواع بدافزار ها و هکر ها تبدیل شده امنیت پلتفرم های اینترنتی یک عامل حیاتی است. 
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
        <img src="/images/hacker015.gif" alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>مهمترین حملات سایبری </h1>
        <h2 style={{ color: "#fff" }}>
        از خطرناک ترین حملات سایبری که در آن حمله کننده تمام پلتفرم را در اختیار میگیرد می توان به حملات بدافزاری , فیشینگ , حملات جاسوسی ,  تزریق بدافزار و حملات دی داس اشاره کرد , تیم امنیت مجموعه مدیریت آنلاین تمام پلتفرم های خود را در مقابل این حملات مصئون نگه میدارد و بصورت مستمر با بهترین راهکارها بروزرسانی می کند. 
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
        <img src="/images/watch02.gif" alt="مدیریت آنلاین " />
        {/* <video src="/videos/watchm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>
          پشتیانی کامل 7/24
        </h1>
        <h2 style={{ color: "#000" }}>
        واحد پشتیبانی مدیریت آنلاین در سه شیفیت و بصورت 24 ساعته حتی در روزهای تعطیل آماده پشتیبانی پلتفرم های مجموعه هستند.
        
        </h2>
        <button> اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#02040E" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/face011.gif" alt="online ceo Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#02040E" }}>
        <h1 style={{ color: "#b30000" }}>امنیت سمت کاربر </h1>
        <h2 style={{ color: "#fff" }}>
           تشخیص چهره , اثرانگشت , رمزهای یکبار مصرف  و سایر متدهای روتین امنیتی برای تمام پلتفرم های مجموعه مدیریت آنلاین قابل اجرا هستند.     
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
export default security;
