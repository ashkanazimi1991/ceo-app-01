import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";
import Own from "../../components/ownSlider/own";
// import AdvisorPic from "../../components/Adviser/advisorPic";
// import Pic from "../../components/automation/pic";
const iotsetup = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
        <Own img1="/images/apps013.jpg" objectFit1="cover" img2="/images/chart.gif" objectFit2="contain" img3="/images/arm010.jpg" objectFit3="cover" img4="/images/ai400.gif" objectFit4="contain" img5="/images/bi.jpg" objectFit5="cover" img6="/images/update01.gif" objectFit6="contain" bgColor="#000" bg1Color="#fff" bg2Color="#fff" bg3Color="" bg4Color="#fff" bg5Color="#000" bg6Color="#fff"/>
        {/* <AdvisorPic/> */}
        {/* <img src="/images/advisorPic/automation.svg" alt="" /> */}
        {/* <Pic className={styles.automation}/> */}
      </div>
      <div className={styles.video_title}>
        <h1>Business intelligence </h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#fff" }}>
      <div className={styles.leftSide}>
       <img src="/images/bi111.gif" alt="online ceo Company" />
        {/* <video src="/videos/fashinm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide}>
        <h1> هوشمند سازی کسب و کار</h1>
        <h2 id={styles.titleh2}> 
          .هوشمند سازی کسب و کار یک شاخه جدید است که از سه بحث جمع آوری اطلاعات , آنالیز اطلاعات و اجرا برپایه اطلاعات تشکیل شده است.در ادامه این سه موضوع به تفصیل توضیح داده می شود در هوشمندسازی کسب و کار هوش مصنوعی و یادگیری ماشین بستر اصلی کسب و کار را در بر میگیرد 
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
        <img src="/images/aa300.gif " alt="onlineceo Company" />
      </div>
      <div className={styles.rightSide}>
        <h1 style={{ color: "#ff0000" }}>جمع آوری داده و آرشیو بندی </h1>
        <h2 style={{ color: "#fff" }}>
         اولین و مهمترین دلیل پیشرفت در هر کسب و کار جمع آوری و آرشیو بندی اطلاعات از بخش های مختلف کسب و کار است. تا زمانی که اطلاعات به دست آماده از محیط کار , نیرو های انسانی , وضعیت ماشین آلات به درستی آرشیو بندی نشود نمی شود از آن اطلاعات استفاده کرد.مجموعه مدیریت آنلاین با استفاده از سخت افزار های اختصاصی , سنسورهای اینترنت اشیا و سایر ورودی ها لحظه به لحظه تمام اطلاعات را جمع آوری و دسته بندی می کند و در دیتاسنتر خصوصی خود کسب و کار ذخیر می کند و در اختیار واحد آنالیز می گذارد 
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
        <img src="/images/bi200.gif" alt="مدیریت آنلاین " />
        {/* <video src="/videos/watchm.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
        <h1 style={{ color: "#b30000" }}>
          آنالیز داده و ارائه گزارش
        </h1>
        <h2 style={{ color: "#000" }}> 
          جمع آوری اطلاعات به تنهایی سبب هوشمندسازی نمی شود ولی وقتی اطلاعات کسب و کار بصورت گزارش در اختیار مدیران قرار میگیرد باعث می شود مدیران کسب و کار نسبت به گزارشات تصمیم درست بگیرند و کسب و کار خود را در چالش های مختلف هدایت کنند, . ....        
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
        <img src="/images/ai220.gif" alt="online ceo Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#010106" }}>
        <h1 style={{ color: "#b30000" }}>هوش مصنوعی در کسب و کار  </h1>
        <h2 style={{ color: "#fff" }}>
             هوش مصنوعی در زمان حال می تواند ببیند , بشنود , محاسبات ریاضی پیچیده را انجام دهد و از دستورات مدیر خود اطاعت کند. با افزایش اطاعات کسب و کار از هر بخش هوش مصنوعی کل مجموعه قدرتمند تر می شود و می تواند به مدیران پیشنهادهای , بر پایه آنالیز داده ارائه دهد که خود مدیران بخاطر محدودیت های انسانی , نمی توانند 
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
export default iotsetup;
