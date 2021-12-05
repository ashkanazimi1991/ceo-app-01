import Products from "../../components/product/products";

const robotichardware = ({ data }) => {
  return (
    <div>
      <Products
        leftSideBgColor="#fff"
        rightSideBgColor="#fff"
        displatChart="none"
        img1Slider="/images/arm501.jpg"
        img2Slider="/images/99999.png"
        img3Slider="/images/roboticarm800.png"
        title1Banner="Robotic Shop"
        img2Banner="/images/selfdrive080.png"
        title2Banner="CEO Transport Robot"
        subtitle2Banner="انتقال هوشمند"
        title3Banner="CEO R&D Arm 1.38.4 "
        img3Banner="/images/roboticarm800.png"
        subtitle3Banner="بازوهای تخصصی و تحقیقاتی"
        title4Banner="CEO Industrial Arm 1.40.4"
        img4Banner="/images/arm500.png"
        subtitle4Banner="بازو صنعتی ,  هوشمند و تحت وب "
        title5Banner=" CEO Multi-Arm "
        img5Banner="/images/99999.png"
        subtitle5Banner="High Definition 2.76.16"
        btnTextBanner="اطلاعات بیشتر"
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

export default robotichardware;
