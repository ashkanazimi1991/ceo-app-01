import Products from "../../components/product/products";

const iotstore = ({ data }) => {
  return (
    <div>
      <Products
        leftSideBgColor="#fff"
        rightSideBgColor="#fff"
        displatChart="none"
        img1Slider="/images/iot425.jpg"
        img2Slider="/images/iot426.jpg"
        img3Slider="/images/iot427.jpg"
        title1Banner="IOT   SHOP"
        img2Banner="/images/iot520.png"
        title2Banner=" هوشمند ساز مزارع پرورشی"
        subtitle2Banner="کنترل تحت وب"
        title3Banner="کنترلر سیستم های الکترونیکی"
        img3Banner="/images/autoiot1.png"
        subtitle3Banner="قابل استفاده برای عموم"
        title4Banner="مانیتورینگ دما رطوبت"
        img4Banner="/images/autoiot.png"
        subtitle4Banner="نصب و استفاده کمتر از 10 ثانیه"
        title5Banner=" مانیتورینگ فارم های کوچک"
        img5Banner="/images/autoiot3.png"
        subtitle5Banner="تضمین قیمت - تضمین کیفیت"
        btnTextBanner="اضافه کردن به سبد خرید"
        titleNews="TOP NEWS"
        title1News="پلتفرم یکپارچه گلخانه"
        img1News="/images/greenhouse04.jpg"
        subtitle1News="کنترل و مدیریت تمام گلخانه بر روی یک پلتفرم جامع و اختصاصی توسط مجموعه مدیریت آنلاین قابل ارائه می باشد.این پلتفرم شامل مدیریت بخش های مختلف تولید و پرورش , بسته بندی , فروش ,کنترل پرسنل , مانیتورینگ و مدیریت "
        readMoreLnik="ادامه"
        title2News="رباتیک در کشاورزی"
        img2News="/images/iot310.jpg"
        subtitle2News="مشاغل پرورشی شامل برنامه های روتین و تکراری هستند که اغلب آنها طاقت فرسا و سخت هستند, در مجموعه مدیریت آنلاین تلاش می شود تا حد امکان امور روتین برعهده ربات ها و هوش مصنوعی باشد "
        title3News="افزایش راندمان کسب و کار  "
        img3News="/images/chart400.gif"
        subtitle3News=" زمانی که تمام فاکتورهای حیاتی بصورت آنلاین و خودکار کنترل و مدیریت می شود, خود یک عامل مهم در افزایش راندمان حساب می شود "
        title1Footer="مجموعه برنامه نویسی مدیریت آنلاین"
        title2Footer="...."
        title3Footer="1998"
        data={data}
      />
    </div>
  );
};
export async function getStaticProps(context) {
  const url = encodeURI("products?category=کنسانتره");
  try {
    const res = await axiosInstance.get(url);
    return {
      props: { data: res.data.data },
      revalidate: 10,
    };
  } catch (e) {
    return { props: { data: [] } };
  }
}

export default iotstore;
