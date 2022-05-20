import React from "react";
import Link from "next/link";
import {  ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,  ServicesIcon, ServicesH2, ServicesP,
} from "./Services2Elements";

const Service2 = () => {
  const services = [
    {
      link: "/project",
      image: "images/s14.png",alt:"پلتفرم های فروشگاهی",
      title: " پلتفرم های ",
      descreption:  "معرفی و فروش",
    },
    {
      link: "/project",
      image: "images/s20.png",alt:"پلتفرم های خدماتی",
      title: " پلتفرم های",
      descreption:  " سرویسی و خدماتی",
    },
    {
      link: "/project",
      image: "images/s19.png",alt:"پلتفرم های آموزشی",
      title: "پلتفرم های ",
      descreption:  "آموزشی و ارتباط آنلاین",
    },
    {
      link: "/project",
      image: "images/s17.png",alt:"پلتفرم های استارت آپی",
      title: " پلتفرم های ",
      descreption:  "استارت آپ و ایده های نو",
    },
    {
      link: "/project",
      image: "images/s21.png",alt:"پلتفرم کارخانجات",
      title: " پلتفرم های ",
      descreption:  "کارخانجات و صنایع ",
    },
    {
      link: "/project",
      image: "images/s22.png",alt:"پلتفرم های  ناوگان های حمل و نقل",
      title: "پلتفرم های  ",
      descreption:  "مدیریتی و لجستیک ",
    },
    // {
    //   link: "/",
    //   image: "images/1.png",alt:"خدمات عمومی",
    //   title: " پلتفرم های",
    //   descreption:  "خدمات عمومی و شبکه های اجتماعی",
    // },
    // {
    //   link: "/",
    //   image: "images/1.png",alt:"پلتفرم بیمارستان",
    //   title: "پلتفرم های",
    //   descreption:  "بیمارستان ها , کلنیک هاو مجموعه های عمومی",
    // },
  ];
  return (
    <ServicesContainer id="Services">
      <ServicesH1> پروژه های نمونه </ServicesH1>
      <ServicesWrapper>
        {services.map((item, index) => (
          <ServicesCard key={index}>
            <Link href={`${item.link}`} passHref>
                <ServicesIcon src={item.image} />
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesH2>{item.title}</ServicesH2>
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesP>{item.descreption}</ServicesP>
              </Link>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Service2;
