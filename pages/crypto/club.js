import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Own from "../../components/ownSlider/own";
// import AdvisorPic from "../../components/Adviser/advisorPic";
// import Pic from "../../components/automation/pic";
const club = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <Own img1="/images/club1.jpg" objectFit1="cover" img2="/images/crypto650.gif" objectFit2="cover" img3="/images/crypto.webp" objectFit3="cover" img4="/images/crypto100.webp" objectFit4="cover" img5="/images/website601.webp" objectFit5="cover" img6="/images/club010.gif" objectFit6="contain" bgColor="#000" bg1Color="#fff" bg2Color="#231A2B" bg3Color="" bg4Color="#fff" bg5Color="#000" bg6Color="#fff"/>
        {/* <AdvisorPic/> */}
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>Crypto Club </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#1E263F" }}>
      <div className={styles.leftSide}>
       <img src="/images/startcrypto1.gif" alt="online ceo Company" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1  style={{ color: "#ff0000" }} > آموزش صفر تا صد کریپتو</h1>
        <h2  style={{ color: "#fff" }}id={styles.titleh2}> 
          آموزش کامل و جامع کریپتو در سطح های مختلف توسط معامله گر های با تجربه و برنامه نویسان بلاک چین , در مجموعه مدیریت آنلاین انجام می شود. اگر می خواهید در دنیای کریپتو موضوع مجهولی باقی نگذاریم , به ما بپیوندید   
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
        {/* <video src="/videos/team.mp4" autoPlay muted loop /> */}
        <img src="/images/teanclub.gif " alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>معامله گری تیمی در بازارهای کریپتو </h1>
        <h2 style={{ color: "#fff" }}>
          معامله گری تیمی راه حلی برای کاهش اشتباهات فردی است  , اگر میخواهید بصورت تیمی با هم تیمی های که خودتان انتخاب میکنید معامله انجام دهید , مچموعه مدیریت آنلاین بستر آن را فراهم کرده است. کافی است به ما بپیونید و مانند معامله گران حرفه ای معامله کنید.
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
        <img src="/images/cryptopay.gif" alt="مدیریت آنلاین " />
        {/* <video src="/videos/club01.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>
          استفاده از کریپتو در بین المللی سازی کسب و کار
        </h1>
        <h2 style={{ color: "#000" }}>
        اگر محصول یا خدمتی دارید که می توانید آن را بصورت بین المللی اجرا کنید , کریپتو سریعترین و امن ترین بستر برای این کار است.در پلتفرم های مجموعه مدیریت آنلاین به راحتی میتوانید درگاه های رمز ارز را در کنار درگاه های روتین خود داشته باشید         
        </h2>
        <button> اطلاعات بیشتر</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#130F1A" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/cryptonft.gif" alt="online ceo Company" />
        {/* <video src="/videos/club01.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#130F1A" }}>
        <h1 style={{ color: "#b30000" }}>Build , Sell , Buy , NFT  </h1>
        <h2 style={{ color: "#fff" }}>
              ان اف تی ها  مدیاهای هستند که  وقتی به الگو های بلاک چینی وصل می شوند , می توانند به عنوان واحد های مالی رمز ارزی در آیند , در ابتدا مالک اثر با ارز دیجیتال اثر خود را به بلاک چین متصل می کند سپس آن اثر در فروشگاه های ان اف تی بفروش می رسد ,شما هم می توانید به راحتی و رایگان هنر های خود را به بلاک چین متصل کنید و بفروش برسانید    
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
export default club;
