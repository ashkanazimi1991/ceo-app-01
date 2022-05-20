import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/Advisor.module.css";



const software = () => (
  <Layout>
    {/* ######################################################Video Section */}
    <div className={styles.videoPlace}>
      <div className={styles.video}>
   
      </div>
      <div className={styles.video_title}>
        <h1>Software Devlopment</h1>
      </div>
    </div>
    {/* ############################################################################# Section One */}
    <div className={styles.section} style={{ background: "#142028" }}>
      <div className={styles.leftSide}>
        {/* <video src="/videos/1.mp4"   autoPlay muted   /> */}
        <img src="/images/crypto650.gif" alt="مدیریت آنلاین" />
      </div>
      <div className={styles.rightSide}>
        <h1>پلتفرم و نرم افزار های یک پارچه</h1>
        <h2 id={styles.titleh2}> 
              در دنیای پر رقیب امروز کسب و کارهایی برنده هستند که پلتفرم های یکپارچه دارند و تمام امور روتین خود را روی پلتفرم خود مجموعه انجام میدهند این عمل باعث می شود کارفرمایان درگیر نرم افزارهای جزیره ای نشوند و خط مشی اصلی خود را پیگیر باشند. این پلتفرم های بصورت کراس تمام سیستم عامل ها از قبیل اندروید , ویندوز و ای او اس را شامل می شوند 
        </h2>
        <button> مشاهده و ثبت سفارش از فروشگاه</button>
      </div>
    </div>
    {/* ############################################################################# Section Two */}
  
    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#000" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/arm501.jpg" alt="فروشگاه رباتیک" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#000" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های رباتیک </h1>
        <h2 style={{ color: "#fff" }}>
           طراحی و برنامه نویسی پلتفرم بازوهای رباتیک برای کنترل و مدیریت آسان بازوهای رباتیک در کارخانجات صنعتی, از زمینه های فعالیت مجموعه مدیریت آنلاین است. پلتفرم های رباتیک شامل کنترل و برنامه دهی آنلاین سیستم های رباتیک , ارتباط سیستم های رباتیک با همدیگر ,هوشمندتر کردن بستر های رباتیک و اضافه کردن هوش مصنوعی برای امور خودکار است    
        </h2>
        <button>مشاهده و ثبت سفارش از فروشگاه</button>
      </div>
    </div>
    {/* ############################################################################# Section Four */}
    <div
      className={styles.section}
      style={{ direction: "ltr", background: "#142028" }}
    >
      
      <div className={styles.leftSide}>
      <img src="/images/dashbord01.jpg" alt="online ceo Company" />
        {/* <video src="/videos/ar2.mp4" autoPlay muted loop /> */}
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#142028" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های پرورشی</h1>
        <h2 style={{ color: "#fff" }}>
          پلتفرم های تحت وب  گلخانه ها , واحد های پرورشی, واحد های نگهداری و ... برای کنترل و مدیریت تمام فاکتورهای مورد نیاز بصورت اختصاصی , کاربردی و تحت وب در مجموعه مدیریت آنلاین انجام می شود .
        </h2>
        <button>مشاهده و ثبت سفارش از فروشگاه </button>
      </div>
    </div>

    <div
      className={styles.section}
      style={{ direction: "rtl", background: "#000" }}
    >
      <div className={styles.leftSide}>
        <img src="/images/plat010.jpg" alt="online ceo Company" />
      </div>
      <div className={styles.rightSide} style={{ backgroundColor: "#000" }}>
        <h1 style={{ color: "#b30000" }}>پلتفرم های آنالیزی و تحلیلی </h1>
        <h2 style={{ color: "#fff" }}>
            پلتفرم های آنالیزی مجموعه مدیریت آنلاین می تواند داده های ارسال شده از سیستم ها و سنسورهای مختلف را جمع آوری و دسته بندی  کند و با استفاده از هوش مصنوعی , الگوریتم نویسی و علم داده آنالیز و بصورت انواع گزارش ارائه  دهد, این قابلیت می تواند در تمام صنایع مانند پزشکی و صنعت کاربرد داشته باشد.
        </h2>
        <button> مشاهده و ثبت سفارش از فروشگاه</button>
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
